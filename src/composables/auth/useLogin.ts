import { useAuthEventProvider } from "@providers/AuthProvider";
import { useNavigate } from "@solidjs/router";
import { createSignal } from "solid-js";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = createSignal(false);
  const { setCurrentUser } = useAuthEventProvider();

  const doLogin = (email: string, password: string) => {
    try {
      setLoading(true);
      setCurrentUser(email);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    isLoading,
    doLogin,
  };
};
