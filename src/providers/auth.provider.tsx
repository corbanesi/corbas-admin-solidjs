import { RoutesEnum } from "@/routes";
import { apiCurrentUser } from "@/services/auth.service";
import { Routes, useLocation, useNavigate } from "@solidjs/router";
import { createContext, onMount, ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store";

interface IAuthStateContext {
  isAuthenticated: boolean;
  currentUser: CurrentUser | null;
}

interface IAuthEventContext {
  setCurrentUser: (user: CurrentUser) => void;
  removeCurrentUser: () => void;
}

const initialAuthState: IAuthStateContext = {
  isAuthenticated: false,
  currentUser: null,
};

const AuthStateContext = createContext<IAuthStateContext>(initialAuthState);
const AuthEventContext = createContext<IAuthEventContext>(
  {} as IAuthEventContext
);

export const AuthProvider: ParentComponent = (props) => {
  const [authState, setAuthState] = createStore(initialAuthState);

  const navigate = useNavigate();
  const location = useLocation();

  const authEvent = {
    setCurrentUser: (user: CurrentUser) => {
      setAuthState("currentUser", user);
      setAuthState("isAuthenticated", true);
    },
    removeCurrentUser: () => {
      setAuthState("currentUser", null);
      setAuthState("isAuthenticated", false);
    },
  };

  onMount(async () => {
    if (!authState.isAuthenticated && (location.pathname != RoutesEnum.SIGN_IN_PAGE)) {
      try {
        const currentUserResponse = await apiCurrentUser();
        authEvent.setCurrentUser(currentUserResponse);
      } catch (error) {
        navigate(RoutesEnum.SIGN_IN_PAGE, { replace: true });
      }
    } else if (authState.isAuthenticated && (location.pathname == RoutesEnum.SIGN_IN_PAGE)) {
      navigate(RoutesEnum.HOME_PAGE, { replace: true });
    }
  });

  return (
    <AuthStateContext.Provider value={authState}>
      <AuthEventContext.Provider value={authEvent}>
        {props.children}
      </AuthEventContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useAuthStateProvider = () => useContext(AuthStateContext);
export const useAuthEventProvider = () => useContext(AuthEventContext);
