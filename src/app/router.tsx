import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootErrorBoundary, RootLayout } from "./layouts/root";
import { lazy } from "react";
import { Routes } from "@/shared/constants/routes";
import { getSessionLoader } from "@/shared/api/session-query";
import { MainLayout, MainLoading } from "./layouts/main";
import { AuthLayout } from "./layouts/auth/ui/auth-layout";

const HomePage = lazy(() =>
  import("../pages/home").then((module) => ({
    default: module.HomePage,
  }))
);

const SearchPage = lazy(() =>
  import("../pages/search").then((module) => ({
    default: module.SearchPage,
  }))
);

const FavoritesPage = lazy(() =>
  import("../pages/favorites").then((module) => ({
    default: module.FavoritesPage,
  }))
);

const ProfilePage = lazy(() =>
  import("../pages/profile").then((module) => ({
    default: module.ProfilePage,
  }))
);

const TestsPage = lazy(() =>
  import("../pages/tests").then((module) => ({
    default: module.TestsPage,
  }))
);

const LeadsPage = lazy(() =>
  import("../pages/leads").then((module) => ({
    default: module.LeadsPage,
  }))
);

const BookingPage = lazy(() =>
  import("../pages/booking").then((module) => ({
    default: module.BookingPage,
  }))
);

const SalesPage = lazy(() =>
  import("../pages/sales").then((module) => ({
    default: module.SalesPage,
  }))
);

const AcademyPage = lazy(() =>
  import("../pages/academy").then((module) => ({
    default: module.AcademyPage,
  }))
);

const DocumentsPage = lazy(() =>
  import("../pages/documents").then((module) => ({
    default: module.DocumentsPage,
  }))
);

const BulletinsPage = lazy(() =>
  import("../pages/bulletins").then((module) => ({
    default: module.BulletinsPage,
  }))
);

const NewsPage = lazy(() =>
  import("../pages/news").then((module) => ({
    default: module.NewsPage,
  }))
);

const NewsDetailPage = lazy(() =>
  import("../pages/news-detail").then((module) => ({
    default: module.NewsDetailPage,
  }))
);

const FactoryPage = lazy(() =>
  import("../pages/factory").then((module) => ({
    default: module.FactoryPage,
  }))
);

const SignInPage = lazy(() =>
  import("../pages/sign-in").then((module) => ({
    default: module.SignInPage,
  }))
);

const NotFoundPage = lazy(() =>
  import("../pages/not-found").then((module) => ({
    default: module.NotFoundPage,
  }))
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<RootErrorBoundary />}>
      <Route
        element={<MainLayout />}
        loader={getSessionLoader}
        hydrateFallbackElement={<MainLoading />}>
        <Route index element={<HomePage />} />
        <Route path={Routes.Search} element={<SearchPage />} />
        <Route path={Routes.Favorites} element={<FavoritesPage />} />
        <Route path={Routes.Profile} element={<ProfilePage />} />
        <Route path={Routes.Tests} element={<TestsPage />} />
        <Route path={Routes.Leads} element={<LeadsPage />} />
        <Route path={Routes.Booking} element={<BookingPage />} />
        <Route path={Routes.Sales} element={<SalesPage />} />
        <Route path={Routes.Academy} element={<AcademyPage />} />
        <Route path={Routes.Documents} element={<DocumentsPage />} />
        <Route path={Routes.Bulletins} element={<BulletinsPage />} />
        <Route path={Routes.News} element={<NewsPage />} />
        <Route path={Routes.News + "/:newsId"} element={<NewsDetailPage />} />
        <Route path={Routes.Factory} element={<FactoryPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path={Routes.SignIn} element={<SignInPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
