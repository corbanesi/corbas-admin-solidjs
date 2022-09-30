import { useAuthEventProvider } from "@/providers/auth.provider";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";
import { apiCurrentUser, apiSignIn } from "@/services/auth.service";
import toast from "solid-toast";
import { RoutesEnum } from "@/app.routes";

export const useLogin = () => {
  const [isLoading, setLoading] = createSignal(false);
  const authEvent = useAuthEventProvider();
  const navigate = useNavigate();

  const doLogin = async (email: string, password: string) => {
    try {
      setLoading(true);

      await apiSignIn(email, password);

      const currentUserResponse = await apiCurrentUser();
      authEvent.setCurrentUser(currentUserResponse);

      toast.success("Successfully logged in", { position: "top-right" });
      navigate(RoutesEnum.HOME_PAGE, { replace: true });
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
    doLogin,
  };
};
