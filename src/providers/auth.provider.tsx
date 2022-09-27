import { createContext, ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store";

interface IAuthStateContext {
  isAuthenticated: boolean;
  currentUser: User | null;
}

interface IAuthEventContext {
  setCurrentUser: (user: User) => void;
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
    setCurrentUser: (user: User) => {
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
