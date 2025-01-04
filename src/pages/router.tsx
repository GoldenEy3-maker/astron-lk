import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootErrorBoundary, RootLayout } from "./layouts/root";
import { lazy } from "react";
import { Routes } from "@/shared/constants/routes";
import { ProtectedLayout } from "./layouts/protected";
import { Main } from "@/shared/ui/main";
import { sessionLoader } from "@/entities/session";

const HomePage = lazy(() =>
  import("./home").then((module) => ({
    default: module.HomePage,
  }))
);

const SearchPage = lazy(() =>
  import("./search").then((module) => ({
    default: module.SearchPage,
  }))
);

const FavoritesPage = lazy(() =>
  import("./favorites").then((module) => ({
    default: module.FavoritesPage,
  }))
);

const ProfilePage = lazy(() =>
  import("./profile").then((module) => ({
    default: module.ProfilePage,
  }))
);

const SignInPage = lazy(() =>
  import("./sign-in").then((module) => ({
    default: module.SignInPage,
  }))
);

const NotFoundPage = lazy(() =>
  import("./not-found").then((module) => ({ default: module.NotFoundPage }))
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<RootErrorBoundary />}>
      <Route
        element={<ProtectedLayout />}
        loader={sessionLoader}
        HydrateFallback={() => {
          return (
            <Main>
              <h4 className="text-h4">Loading...</h4>
            </Main>
          );
        }}>
        <Route index element={<HomePage />} />
        <Route path={Routes.Search} element={<SearchPage />} />
        <Route path={Routes.Favorites} element={<FavoritesPage />} />
        <Route path={Routes.Profile} element={<ProfilePage />} />
      </Route>
      <Route path={Routes.SignIn} element={<SignInPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
