import { Outlet } from "@solidjs/router";
import { ParentComponent } from "solid-js";
import { CorbasNavbar } from "@/components/atomic";

const DashboardLayout: ParentComponent = () => {
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
