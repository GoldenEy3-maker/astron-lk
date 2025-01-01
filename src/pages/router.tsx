import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootErrorBoundary, RootLayout } from "./layouts/root";
import { lazy } from "react";
import { Routes } from "@/shared/constants/routes";

const HomePage = lazy(() =>
  import("./home").then((module) => ({
    default: module.HomePage,
  }))
);
const LoginPage = lazy(() =>
  import("./login").then((module) => ({
    default: module.LoginPage,
  }))
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<RootErrorBoundary />}>
      <Route index element={<HomePage />} />
      <Route path={Routes.Login} element={<LoginPage />} />
    </Route>
  )
);
