import { createSignal } from "solid-js";
import { useAuthEventProvider } from "@/providers/auth.provider";
import { apiSignOut } from "@/services/auth.service";
import toast from "solid-toast";

export const useLogout = () => {
  const [isLoading, setLoading] = createSignal(false);
  const authEvent = useAuthEventProvider();

  const doLogout = async () => {
    try {
      setLoading(true);
      await apiSignOut();
      authEvent.removeCurrentUser();
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
