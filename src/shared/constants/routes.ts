import { ValueOf } from "../lib/types/utility";

export const Routes = {
  Home: "/",
  Auth: "/auth",
} as const;

export type Routes = ValueOf<typeof Routes>;
