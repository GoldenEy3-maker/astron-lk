import { SignInForm } from "@/features/auth";
import { CTABanner } from "./cta-banner";

export function SignInPage() {
  return (
    <div>
      <h1 className="col-span-full text-h1">Авторизация</h1>
      <SignInForm className="~mt-6/9" />
      <CTABanner className="~mt-6/7" />
    </div>
  );
}
