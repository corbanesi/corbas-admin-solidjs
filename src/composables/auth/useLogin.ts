import { useAuthEventProvider } from "@providers/AuthProvider";
import { useNavigate } from "@solidjs/router";
import { RoutesEnum } from "@/routes";
import { createSignal } from "solid-js";
import { apiCurrentUser, apiSignIn } from "@/services/AuthService";
import toast from "solid-toast";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = createSignal(false);
  const { setCurrentUser } = useAuthEventProvider();

  const doLogin = async (email: string, password: string) => {
    try {
      setLoading(true);

      await apiSignIn(email, password);

      const currentUserResponse = await apiCurrentUser();
      setCurrentUser(currentUserResponse);

      toast.success("Successfully logged in", { position: "top-center" });
      navigate(RoutesEnum.HOME_PAGE, { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, { position: "top-center" });
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
