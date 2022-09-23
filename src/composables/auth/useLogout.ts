import { RoutesEnum } from "@/routes";
import { useAuthEventProvider } from "@providers/AuthProvider";
import { useNavigate } from "@solidjs/router";

export const useLogout = () => {
  const navigate = useNavigate();
  const { removeCurrentUser } = useAuthEventProvider();

  const doLogout = () => {
    removeCurrentUser();
    navigate(RoutesEnum.SIGN_IN_PAGE, { replace: true });
  };

  return {
    doLogout,
  };
};
