import { Navigate, Outlet, Route, Routes } from "@solidjs/router";
import { Component, JSX, lazy, Show } from "solid-js";

import { useAuthStateProvider } from "./providers/auth.provider";

const DashboardLayout = lazy(() => import("./layouts/dashboard.layout"));
const SignInPage = lazy(() => import("./pages/signIn.page"));
const NotFoundPage = lazy(() => import("./pages/notFound.page"));

const HomePage = lazy(() => import("./pages/dashboard/home.page"));
const AboutPage = lazy(() => import("./pages/dashboard/about.page"));

export enum RoutesEnum {
  SIGN_IN_PAGE = "/signin",
  HOME_PAGE = "/",
  ABOUT_PAGE = "/about",
  NOT_FOUND = "*all",
}

interface ProtectedRouteProps {
  path?: string;
  redirect: string;
  children: JSX.Element;
}

interface ProtectedProps {
  redirect: string;
}

export const AppRoutes: Component = () => {
  return (
    <Routes>
      <ProtectedRoute
        redirect={RoutesEnum.SIGN_IN_PAGE}
        path={RoutesEnum.HOME_PAGE}
      >
        <Route path={RoutesEnum.HOME_PAGE} component={DashboardLayout}>
          <Route path={RoutesEnum.HOME_PAGE} component={HomePage}></Route>
          <Route path={RoutesEnum.ABOUT_PAGE} component={AboutPage}></Route>
        </Route>
      </ProtectedRoute>
      <Route path={RoutesEnum.SIGN_IN_PAGE} component={SignInPage}></Route>
      <Route path={RoutesEnum.NOT_FOUND} component={NotFoundPage}></Route>
    </Routes>
  );
};

const ProtectedRoute = (props: ProtectedRouteProps) => {
  return (
    <Route
      path={props.path || RoutesEnum.HOME_PAGE}
      element={<Protected redirect={props.redirect} />}
    >
      {props.children}
    </Route>
  );
};

const Protected = (props: ProtectedProps) => {
  const authState = useAuthStateProvider();
  return (
    <Show
      when={authState.isAuthenticated}
      fallback={<Navigate href={props.redirect} />}
    >
      <Outlet />
    </Show>
  );
};
