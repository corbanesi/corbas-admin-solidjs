import { AuthProvider } from "@/providers/auth.provider";
import { Suspense, VoidComponent } from "solid-js";
import { Toaster } from "solid-toast";
import { CorbasLoading } from "@/components/atomic";
import { AppRoutes } from "./app.routes";

const App: VoidComponent = () => {
  return (
    <Suspense fallback={<CorbasLoading />}>
      <AuthProvider>
        <AppRoutes />
        <Toaster />
      </AuthProvider>
    </Suspense>
  );
};

export default App;
