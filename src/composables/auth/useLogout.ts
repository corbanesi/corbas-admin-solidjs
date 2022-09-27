import { RoutesEnum } from "@/routes";
import { useAuthEventProvider } from "@/providers/auth.provider";
import { useNavigate } from "@solidjs/router";

export const useLogout = () => {
  const navigate = useNavigate();
  const authEvent = useAuthEventProvider();

  const doLogout = () => {
    authEvent.removeCurrentUser();
    navigate(RoutesEnum.SIGN_IN_PAGE, { replace: true });
  };

  return {
    doLogout,
  };
};
