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
    component: lazy(() => import("./pages/signIn.page")),
  },
  {
    path: RoutesEnum.HOME_PAGE,
    component: lazy(() => import("./layouts/dashboard.layout")),
    children: [
      {
        path: "/",
        component: lazy(() => import("./pages/dashboard/home.page")),
      },
      {
        path: RoutesEnum.ABOUT_PAGE,
        component: lazy(() => import("./pages/dashboard/about.page")),
      },
    ],
  },
  {
    path: RoutesEnum.NOT_FOUND,
    component: lazy(() => import("./pages/notFound.page")),
  },
];
