import { lazy } from "react";

const HomePage = lazy(() =>
  import("../../pages/home").then((module) => ({
    default: module.HomePage,
  })),
);

const SearchPage = lazy(() =>
  import("../../pages/search").then((module) => ({
    default: module.SearchPage,
  })),
);

const FavoritesPage = lazy(() =>
  import("../../pages/favorites").then((module) => ({
    default: module.FavoritesPage,
  })),
);

const ProfilePage = lazy(() =>
  import("../../pages/profile").then((module) => ({
    default: module.ProfilePage,
  })),
);

const EmployeeTestingPage = lazy(() =>
  import("../../pages/employee-testing").then((module) => ({
    default: module.EmployeeTestingPage,
  })),
);

const LeadsPage = lazy(() =>
  import("../../pages/leads").then((module) => ({
    default: module.LeadsPage,
  })),
);

const BookingPage = lazy(() =>
  import("../../pages/booking").then((module) => ({
    default: module.BookingPage,
  })),
);

const SalesPage = lazy(() =>
  import("../../pages/sales").then((module) => ({
    default: module.SalesPage,
  })),
);

const AcademyPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyPage,
  })),
);

const AcademySalesPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademySalesPage,
  })),
);

const AcademySalesStagesPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademySalesStagesPage,
  })),
);

const AcademyConversationsPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyConversationsPage,
  })),
);

const AcademyAnalysisPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyAnalysisPage,
  })),
);

const AcademyCommercialPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyCommercialPage,
  })),
);

const AcademyProjectsPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyProjectsPage,
  })),
);

const AcademyProjectsDetailPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyProjectsDetailPage,
  })),
);

const AcademyWebinarsPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyWebinarsPage,
  })),
);

const AcademyWebinarsDetailPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyWebinarsDetailPage,
  })),
);

const AcademyBenefitsPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyBenefitsPage,
  })),
);

const AcademyBenefitsDetailPage = lazy(() =>
  import("../../pages/academy").then((module) => ({
    default: module.AcademyBenefitsDetailPage,
  })),
);

const DocumentsPage = lazy(() =>
  import("../../pages/documents").then((module) => ({
    default: module.DocumentsPage,
  })),
);

const PartnersPage = lazy(() =>
  import("../../pages/partners").then((module) => ({
    default: module.PartnersPage,
  })),
);

const PartnersDetailPage = lazy(() =>
  import("../../pages/partners").then((module) => ({
    default: module.PartnersDetailPage,
  })),
);

const BulletinsPage = lazy(() =>
  import("../../pages/bulletins").then((module) => ({
    default: module.BulletinsPage,
  })),
);

const NewsPage = lazy(() =>
  import("../../pages/news").then((module) => ({
    default: module.NewsPage,
  })),
);

const NewsDetailPage = lazy(() =>
  import("../../pages/news").then((module) => ({
    default: module.NewsDetailPage,
  })),
);

const FactoryPage = lazy(() =>
  import("../../pages/factory").then((module) => ({
    default: module.FactoryPage,
  })),
);

const SignInPage = lazy(() =>
  import("../../pages/sign-in").then((module) => ({
    default: module.SignInPage,
  })),
);

const RecoveryPasswordPage = lazy(() =>
  import("../../pages/recovery-password").then((module) => ({
    default: module.RecoveryPasswordPage,
  })),
);

const RecoveryPasswordSendLinkPage = lazy(() =>
  import("../../pages/recovery-password-send-link").then((module) => ({
    default: module.RecoveryPasswordSendLinkPage,
  })),
);

const NotFoundPage = lazy(() =>
  import("../../pages/not-found").then((module) => ({
    default: module.NotFoundPage,
  })),
);

export {
  HomePage,
  SearchPage,
  FavoritesPage,
  ProfilePage,
  EmployeeTestingPage,
  LeadsPage,
  BookingPage,
  SalesPage,
  AcademyPage,
  AcademySalesPage,
  AcademySalesStagesPage,
  AcademyConversationsPage,
  AcademyAnalysisPage,
  AcademyCommercialPage,
  AcademyProjectsPage,
  AcademyProjectsDetailPage,
  AcademyWebinarsPage,
  AcademyWebinarsDetailPage,
  AcademyBenefitsPage,
  AcademyBenefitsDetailPage,
  DocumentsPage,
  PartnersPage,
  PartnersDetailPage,
  BulletinsPage,
  NewsPage,
  NewsDetailPage,
  FactoryPage,
  SignInPage,
  RecoveryPasswordPage,
  RecoveryPasswordSendLinkPage,
  NotFoundPage,
};
