import { useAuthEventProvider } from "@providers/AuthProvider";
import { useNavigate } from "@solidjs/router";

export const useLogout = () => {
  const navigate = useNavigate();
  const { removeCurrentUser } = useAuthEventProvider();

  const doLogout = () => {
    removeCurrentUser();
    navigate("/signin", { replace: true });
  };

  return {
    doLogout,
  };
};
