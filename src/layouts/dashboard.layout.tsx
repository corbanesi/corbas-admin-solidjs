import { CorbasNavBar } from "@/components/corbas.navbar";
import { useAuthStateProvider } from "@/providers/auth.provider";
import { Outlet, useNavigate } from "@solidjs/router";
import { onMount, ParentComponent } from "solid-js";
import { RoutesEnum } from "@/routes";

const DashboardLayout: ParentComponent = (props) => {
  const authState = useAuthStateProvider();
  const navigate = useNavigate();

  onMount(() => {
    if (!authState.isAuthenticated) {
      navigate(RoutesEnum.SIGN_IN_PAGE);
    }
  });

  return (
    <div class="h-full md:py-4">
      <div class="container mx-auto h-full rounded-lg border bg-slate-200/30 shadow-xl">
        <CorbasNavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
