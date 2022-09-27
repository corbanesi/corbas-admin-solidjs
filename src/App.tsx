import { AuthProvider } from "@/providers/auth.provider";
import { useRoutes } from "@solidjs/router";
import type { VoidComponent } from "solid-js";
import { routes } from "./routes";
import { Toaster } from "solid-toast";

const App: VoidComponent = () => {
  const Routes = useRoutes(routes);
  return (
    <AuthProvider>
      <Routes />
      <Toaster />
    </AuthProvider>
  );
};

export default App;
