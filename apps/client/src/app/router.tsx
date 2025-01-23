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
import {
  setCrumbHandle,
  setCrumbHandleFromParams,
} from "@/widgets/breadcrumbs";

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

const EmployeeTestingPage = lazy(() =>
  import("../pages/employee-testing").then((module) => ({
    default: module.EmployeeTestingPage,
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

const AcademySalesPage = lazy(() =>
  import("../pages/academy").then((module) => ({
    default: module.AcademySalesPage,
  }))
);

const AcademySalesStagesPage = lazy(() =>
  import("../pages/academy").then((module) => ({
    default: module.AcademySalesStagesPage,
  }))
);

const AcademyConversationsPage = lazy(() =>
  import("../pages/academy").then((module) => ({
    default: module.AcademyConversationsPage,
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
  import("../pages/news").then((module) => ({
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

const RecoveryPasswordPage = lazy(() =>
  import("../pages/recovery-password").then((module) => ({
    default: module.RecoveryPasswordPage,
  }))
);

const RecoveryPasswordSendLinkPage = lazy(() =>
  import("../pages/recovery-password-send-link").then((module) => ({
    default: module.RecoveryPasswordSendLinkPage,
  }))
);

const NotFoundPage = lazy(() =>
  import("../pages/not-found").then((module) => ({
    default: module.NotFoundPage,
  }))
);

export function createRouter() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />} errorElement={<RootErrorBoundary />}>
        <Route
          element={<MainLayout />}
          loader={getSessionLoader}
          hydrateFallbackElement={<MainLoading />}
          handle={setCrumbHandle(Routes.Home, "Главная")}>
          <Route index element={<HomePage />} />
          <Route
            path={Routes.Search}
            element={<SearchPage />}
            handle={setCrumbHandle(Routes.Search, "Поиск по сайту")}
          />
          <Route
            path={Routes.Favorites}
            element={<FavoritesPage />}
            handle={setCrumbHandle(Routes.Favorites, "Избранное")}
          />
          <Route
            path={Routes.Profile}
            element={<ProfilePage />}
            handle={setCrumbHandle(Routes.Profile, "Профиль")}
          />
          <Route
            path={Routes.EmployeeTesting}
            element={<EmployeeTestingPage />}
            handle={setCrumbHandle(
              Routes.EmployeeTesting,
              "Тестирование сотрудников"
            )}
          />
          <Route
            path={Routes.Leads}
            element={<LeadsPage />}
            handle={setCrumbHandle(Routes.Leads, "Результаты лидогенераци")}
          />
          <Route
            path={Routes.Booking}
            element={<BookingPage />}
            handle={setCrumbHandle(Routes.Booking, "Букинг")}
          />
          <Route
            path={Routes.Sales}
            element={<SalesPage />}
            handle={setCrumbHandle(Routes.Sales, "Продажи")}
          />
          <Route
            path={Routes.Academy}
            handle={setCrumbHandle(Routes.Academy, "Академия Astron")}>
            <Route index element={<AcademyPage />} />
            <Route
              path={Routes.AcademySales}
              handle={setCrumbHandle(Routes.AcademySales, "Процесс продаж")}>
              <Route index element={<AcademySalesPage />} />
              <Route
                path={Routes.AcademySalesStages}
                element={<AcademySalesStagesPage />}
                handle={setCrumbHandle(
                  Routes.AcademySalesStages,
                  "Этапы процесса продаж"
                )}
              />
            </Route>
            <Route
              path={Routes.AcademyConversations}
              element={<AcademyConversationsPage />}
              handle={setCrumbHandle(
                Routes.AcademyConversations,
                "Подготовка к переговорам"
              )}
            />
          </Route>
          <Route
            path={Routes.Documents}
            element={<DocumentsPage />}
            handle={setCrumbHandle(Routes.Documents, "Документы")}
          />
          <Route
            path={Routes.Bulletins}
            element={<BulletinsPage />}
            handle={setCrumbHandle(Routes.Bulletins, "Бюллетень")}
          />
          <Route
            path={Routes.News}
            handle={setCrumbHandle(Routes.News, "Новости")}>
            <Route index element={<NewsPage />} />
            <Route
              path={Routes.News + "/:newsId"}
              element={<NewsDetailPage />}
              handle={setCrumbHandleFromParams("newsId")}
            />
          </Route>
          <Route
            path={Routes.Factory}
            element={<FactoryPage />}
            handle={setCrumbHandle(Routes.Factory, "Завод")}
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={Routes.SignIn} element={<SignInPage />} />
          <Route
            path={Routes.RecoveryPasswordSendLink}
            element={<RecoveryPasswordSendLinkPage />}
          />
          <Route
            path={Routes.RecoveryPassword + "/:token"}
            element={<RecoveryPasswordPage />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
}
