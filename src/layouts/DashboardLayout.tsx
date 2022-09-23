import { NavBar } from "@components/NavBar";
import { useAuthStateProvider } from "@providers/AuthProvider";
import { Outlet, useNavigate } from "@solidjs/router";
import { onMount, ParentComponent } from "solid-js";
import { RoutesEnum } from "@/routes";

const DashboardLayout: ParentComponent = (props) => {
  const authProvider = useAuthStateProvider();
  const navigate = useNavigate();

  onMount(() => {
    if (!authProvider.isAuthenticated) {
      navigate(RoutesEnum.SIGN_IN_PAGE);
    }
  });

  return (
    <div class="h-full md:py-4">
      <div class="container mx-auto h-full rounded-lg border bg-slate-200/30 shadow-xl">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
