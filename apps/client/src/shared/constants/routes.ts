import { ValueOf } from "../lib/types/utility";

export const Routes = {
  Home: "/",
  SignIn: "/sign-in",
  RecoveryPasswordSendLink: "/password/send-link",
  RecoveryPassword: "/password/recovery",
  Search: "/search",
  Favorites: "/favorites",
  Profile: "/profile",
  Tests: "/tests",
  Leads: "/leads",
  Sales: "/sales",
  Booking: "/booking",
  Bulletins: "/bulletins",
  Documents: "/documents",
  Factory: "/factory",
  News: "/news",
  Academy: "/academy",
  AcademyProjects: "/academy/projects",
  AcademyWebinars: "/academy/webinars",
  AcademySales: "/academy/sales",
  AcademyBenefits: "/academy/benefits",
} as const;

export type Routes = ValueOf<typeof Routes>;
