import { SignInForm } from "./sign-in-form";
import { Main } from "@/shared/ui/main";
import { CTABanner } from "./cta-banner";

export function SignInPage() {
  return (
    <Main className="my-20 block col-[main] w-full mx-auto max-w-[42rem]">
      <h1 className="col-span-full text-h1">Авторизация</h1>
      <SignInForm className="col-span-full mt-9" />
      <CTABanner className="mt-7 col-span-full" />
    </Main>
  );
}
