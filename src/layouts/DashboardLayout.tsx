import { useAuthStateProvider } from "@providers/AuthProvider";
import { Outlet, useNavigate } from "@solidjs/router";
import { onMount, ParentComponent } from "solid-js";

const DashboardLayout: ParentComponent = (props) => {
  const authProvider = useAuthStateProvider();
  const navigate = useNavigate();

  onMount(() => {
    if (!authProvider.isAuthenticated) {
      navigate("/signin");
    }
  });

  return (
    <div class="md:py-4">
      <div class="container mx-auto h-full rounded-lg border bg-slate-200/30 shadow-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
