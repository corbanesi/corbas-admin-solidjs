import { AuthProvider } from "@/providers/auth.provider";
import { useRoutes } from "@solidjs/router";
import { Suspense, VoidComponent } from "solid-js";
import { routes } from "@/routes";
import { Toaster } from "solid-toast";
import { CorbasLoading } from "@/components/atomic";

const App: VoidComponent = () => {
  const Routes = useRoutes(routes);
  return (
    <Suspense fallback={<CorbasLoading />}>
      <AuthProvider>
        <Routes />
        <Toaster />
      </AuthProvider>
    </Suspense>
  );
};

export default App;
