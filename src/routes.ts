import { lazy } from "solid-js";

export const routes = [
  {
    path: "/signin",
    component: lazy(() => import("./pages/SignInPage")),
  },
  {
    path: "/",
    component: lazy(() => import("./layouts/DashboardLayout")),
    children: [
      { path: "/", component: lazy(() => import("./pages/HomePage")) },
      {
        path: "/about",
        component: lazy(() => import("./pages/AboutPage")),
      },
    ],
  },
  {
    path: "/*all",
    component: lazy(() => import("./pages/NotFound")),
  },
];
