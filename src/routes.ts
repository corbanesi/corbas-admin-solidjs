import { lazy } from "solid-js";

export enum RoutesEnum {
  SIGN_IN_PAGE = "/signin",
  HOME_PAGE = "/",
  ABOUT_PAGE = "/about",
  NOT_FOUND = "/*all",
}

export const routes = [
  {
    path: RoutesEnum.SIGN_IN_PAGE,
    component: lazy(() => import("./pages/SignInPage")),
  },
  {
    path: RoutesEnum.HOME_PAGE,
    component: lazy(() => import("./layouts/DashboardLayout")),
    children: [
      { path: "/", component: lazy(() => import("./pages/HomePage")) },
      {
        path: RoutesEnum.ABOUT_PAGE,
        component: lazy(() => import("./pages/AboutPage")),
      },
    ],
  },
  {
    path: RoutesEnum.NOT_FOUND,
    component: lazy(() => import("./pages/NotFound")),
  },
];
