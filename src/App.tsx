import { AuthProvider } from "@providers/AuthProvider";
import { useRoutes } from "@solidjs/router";
import type { VoidComponent } from "solid-js";
import { routes } from "./routes";

const App: VoidComponent = () => {
  const Routes = useRoutes(routes);
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
