import { useAuthEventProvider } from "@/providers/auth.provider";
import { useNavigate } from "@solidjs/router";
import { apiSignOut } from "@/services/auth.service";
import toast from "solid-toast";
import { createSignal } from "solid-js";
import { RoutesEnum } from "@/app.routes";

export const useLogout = () => {
  const [isLoading, setLoading] = createSignal(false);
  const authEvent = useAuthEventProvider();
  const navigate = useNavigate();

  const doLogout = async () => {
    try {
      setLoading(true);
      await apiSignOut();
      authEvent.removeCurrentUser();
      navigate(RoutesEnum.SIGN_IN_PAGE, { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, { position: "top-right" });
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    doLogout,
  };
};
