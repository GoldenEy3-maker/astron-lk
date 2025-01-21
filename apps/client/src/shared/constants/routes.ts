import { ValueOf } from "../lib/types/utility";

export const Routes = {
  Home: "/",
  SignIn: "/sign-in",
  RecoveryPasswordSendLink: "/password/send-link",
  RecoveryPassword: "/password/recovery",
  Search: "/search",
  Favorites: "/favorites",
  Profile: "/profile",
  EmployeeTesting: "/employee-testing",
  Leads: "/leads",
  Sales: "/sales",
  Booking: "/booking",
  Bulletins: "/bulletins",
  Documents: "/documents",
  Factory: "/factory",
  News: "/news",
  Academy: "/academy",
  AcademyConversations: "/academy/conversations",
  AcademyAnalysis: "/academy/analysis",
  AcademyCommercial: "/academy/commercial",
  AcademyProjects: "/academy/projects",
  AcademyWebinars: "/academy/webinars",
  AcademySales: "/academy/sales",
  AcademyBenefits: "/academy/benefits",
} as const;

export type Routes = ValueOf<typeof Routes>;
