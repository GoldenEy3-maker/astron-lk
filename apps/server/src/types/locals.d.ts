import { User } from "./globals";

declare global {
  namespace Express {
    interface Locals {
      user?: User;
    }
  }
}
