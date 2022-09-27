import {
  useAuthEventProvider,
  useAuthStateProvider,
} from "@/providers/auth.provider";
import { Outlet, useNavigate } from "@solidjs/router";
import { onMount, ParentComponent } from "solid-js";
import { RoutesEnum } from "@/routes";
import { apiCurrentUser } from "@/services/auth.service";
import { CorbasNavbar } from "@/components/atomic";

const DashboardLayout: ParentComponent = (props) => {
  const authState = useAuthStateProvider();
  const authEvent = useAuthEventProvider();
  const navigate = useNavigate();

  onMount(async () => {
    if (!authState.isAuthenticated) {
      try {
        const currentUserResponse = await apiCurrentUser();
        authEvent.setCurrentUser(currentUserResponse);
      } catch {
        navigate(RoutesEnum.SIGN_IN_PAGE);
      }
    }
  });

  return (
    <div class="h-full md:py-4">
      <div class="container mx-auto h-full rounded-lg border bg-slate-200/30 shadow-xl">
        <CorbasNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
