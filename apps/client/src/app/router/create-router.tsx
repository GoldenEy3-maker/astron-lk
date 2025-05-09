import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { RootErrorBoundary, RootLayout } from "../layouts/root";
import { Routes } from "@/shared/constants/routes";
import { accessControlByRoleLoader } from "@/shared/api/access-control-loader";
import { MainLayout, MainLoading } from "../layouts/main";
import { AuthLayout } from "../layouts/auth/ui/auth-layout";
import {
  setCrumbHandle,
  setCrumbHandleFromParams,
} from "@/widgets/breadcrumbs";
import { getSessionLoader } from "@/shared/api/session-loader";

import * as LazyModules from "./lazy-modules";

export function createRouter() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />} errorElement={<RootErrorBoundary />}>
        <Route
          element={<MainLayout />}
          loader={getSessionLoader}
          hydrateFallbackElement={<MainLoading />}
          handle={setCrumbHandle(Routes.Home, "Главная")}
        >
          <Route index element={<LazyModules.HomePage />} />
          <Route
            path={Routes.Search}
            element={<LazyModules.SearchPage />}
            handle={setCrumbHandle(Routes.Search, "Поиск по сайту")}
          />
          <Route
            path={Routes.Favorites}
            element={<LazyModules.FavoritesPage />}
            handle={setCrumbHandle(Routes.Favorites, "Избранное")}
          />
          <Route
            path={Routes.Profile}
            element={<LazyModules.ProfilePage />}
            handle={setCrumbHandle(Routes.Profile, "Профиль")}
          />
          <Route
            path={Routes.Partners}
            loader={accessControlByRoleLoader(["manager", "super-manager"])}
            handle={setCrumbHandle(Routes.Partners, "Партнеры-Строители")}
          >
            <Route index element={<LazyModules.PartnersPage />} />
            <Route
              path={Routes.Partners + "/:partnerId"}
              handle={setCrumbHandleFromParams("partnerId")}
            >
              <Route index element={<LazyModules.PartnersDetailPage />} />
              <Route
                path={Routes.Partners + "/:partnerId" + Routes.EmployeeTesting}
                element={<LazyModules.EmployeeTestingPage />}
                handle={setCrumbHandle(
                  Routes.EmployeeTesting,
                  "Тестирование сотрудников",
                )}
              />
              <Route
                path={Routes.Partners + "/:partnerId" + Routes.LeadGeneration}
                element={<LazyModules.LeadGenerationPage />}
                handle={setCrumbHandle(
                  Routes.LeadGeneration,
                  "Результаты лидогенераци",
                )}
              />
              <Route
                path={Routes.Partners + "/:partnerId" + Routes.Booking}
                element={<LazyModules.BookingPage />}
                handle={setCrumbHandle(Routes.Booking, "Букинг")}
              />
              <Route
                path={Routes.Partners + "/:partnerId" + Routes.Sales}
                element={<LazyModules.SalesPage />}
                handle={setCrumbHandle(Routes.Sales, "Продажи")}
              />
            </Route>
          </Route>
          <Route
            path={Routes.EmployeeTesting}
            element={<LazyModules.EmployeeTestingPage />}
            loader={accessControlByRoleLoader("partner")}
            handle={setCrumbHandle(
              Routes.EmployeeTesting,
              "Тестирование сотрудников",
            )}
          />
          <Route
            path={Routes.LeadGeneration}
            element={<LazyModules.LeadGenerationPage />}
            handle={setCrumbHandle(
              Routes.LeadGeneration,
              "Результаты лидогенераци",
            )}
            loader={accessControlByRoleLoader("partner")}
          />
          <Route
            path={Routes.Booking}
            element={<LazyModules.BookingPage />}
            handle={setCrumbHandle(Routes.Booking, "Букинг")}
            loader={accessControlByRoleLoader("partner")}
          />
          <Route
            path={Routes.Sales}
            element={<LazyModules.SalesPage />}
            handle={setCrumbHandle(Routes.Sales, "Продажи")}
            loader={accessControlByRoleLoader("partner")}
          />
          <Route
            path={Routes.Academy}
            handle={setCrumbHandle(Routes.Academy, "Академия Astron")}
          >
            <Route index element={<LazyModules.AcademyPage />} />
            <Route
              path={Routes.AcademySection + "/:sectionId"}
              element={<LazyModules.AcademySectionDetailPage />}
              handle={setCrumbHandleFromParams("sectionId")}
            />
            <Route
              path={Routes.AcademySales}
              handle={setCrumbHandle(Routes.AcademySales, "Процесс продаж")}
            >
              <Route index element={<LazyModules.AcademySalesPage />} />
              <Route
                path={Routes.AcademySalesStages}
                element={<LazyModules.AcademySalesStagesPage />}
                handle={setCrumbHandle(
                  Routes.AcademySalesStages,
                  "Этапы процесса продаж",
                )}
              />
            </Route>
            <Route
              path={Routes.AcademyProjects}
              handle={setCrumbHandle(
                Routes.AcademyProjects,
                "Подборки проектов и отзывы",
              )}
            >
              <Route index element={<LazyModules.AcademyProjectsPage />} />
              <Route
                path={Routes.AcademyProjects + "/:projectId"}
                element={<LazyModules.AcademyProjectsDetailPage />}
                handle={setCrumbHandleFromParams("projectId")}
              />
            </Route>
            <Route
              path={Routes.AcademyWebinars}
              handle={setCrumbHandle(Routes.AcademyWebinars, "Вебинары")}
            >
              <Route index element={<LazyModules.AcademyWebinarsPage />} />
              <Route
                path={Routes.AcademyWebinars + "/:webinarId"}
                element={<LazyModules.AcademyWebinarsDetailPage />}
                handle={setCrumbHandleFromParams("webinarId")}
              />
            </Route>
            <Route
              path={Routes.AcademyBenefits}
              handle={setCrumbHandle(Routes.AcademyBenefits, "Преимущества")}
            >
              <Route index element={<LazyModules.AcademyBenefitsPage />} />
              <Route
                path={Routes.AcademyBenefits + "/:benefitId"}
                element={<LazyModules.AcademyBenefitsDetailPage />}
                handle={setCrumbHandleFromParams("benefitId")}
              />
            </Route>
          </Route>
          <Route
            path={Routes.OnlineTests}
            element={<LazyModules.OnlineTestsPage />}
            handle={setCrumbHandle(Routes.OnlineTests, "Онлайн-тесты")}
          />
          <Route
            path={Routes.Documents}
            element={<LazyModules.DocumentsPage />}
            handle={setCrumbHandle(Routes.Documents, "Документы")}
          />
          <Route
            path={Routes.Bulletins}
            element={<LazyModules.BulletinsPage />}
            handle={setCrumbHandle(Routes.Bulletins, "Бюллетень")}
          />
          <Route
            path={Routes.News}
            handle={setCrumbHandle(Routes.News, "Новости")}
          >
            <Route index element={<LazyModules.NewsPage />} />
            <Route
              path={Routes.News + "/:newsId"}
              element={<LazyModules.NewsDetailPage />}
              handle={setCrumbHandleFromParams("newsId")}
            />
          </Route>
          <Route
            path={Routes.Factory}
            element={<LazyModules.FactoryPage />}
            handle={setCrumbHandle(Routes.Factory, "Завод")}
          />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={Routes.SignIn} element={<LazyModules.SignInPage />} />
          <Route
            path={Routes.RecoveryPasswordSendLink}
            element={<LazyModules.RecoveryPasswordSendLinkPage />}
          />
          <Route
            path={Routes.RecoveryPassword + "/:token"}
            element={<LazyModules.RecoveryPasswordPage />}
          />
        </Route>
        <Route path="*" element={<LazyModules.NotFoundPage />} />
      </Route>,
    ),
    {
      basename: import.meta.env.VITE_BASE_URL ?? "/",
    },
  );
}
