import { SignInForm } from "@/features/auth";
import { CTABanner } from "./cta-banner";

export function SignInPage() {
  return (
    <main className="my-20 col-[main] w-full mx-auto max-w-[42rem]">
      <h1 className="col-span-full text-h1">Авторизация</h1>
      <SignInForm className="col-span-full mt-9" />
      <CTABanner className="mt-7 col-span-full" />
    </main>
  );
}
