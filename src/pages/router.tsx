import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootErrorBoundary, RootLayout } from "./layouts/root";
import { lazy } from "react";
import { Routes } from "@/shared/constants/routes";
import { ProtectedLayout } from "./layouts/protected";

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

const NotFoundPage = lazy(() =>
  import("./not-found").then((module) => ({ default: module.NotFoundPage }))
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<RootErrorBoundary />}>
      <Route element={<ProtectedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path={Routes.Login} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
