import { apiCurrentUser } from "@/services/auth.service";
import { useLocation, useNavigate } from "@solidjs/router";
import { createContext, onMount, ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import toast from "solid-toast";

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
