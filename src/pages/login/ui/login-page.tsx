import { LoginForm } from "@/features/auth";
import { Main } from "@/shared/ui/main";

export function LoginPage() {
  return (
    <Main className="my-20 block col-[main] w-full mx-auto max-w-[42rem]">
      <h1 className="col-span-full text-h1">Авторизация</h1>
      <LoginForm className="col-span-full mt-9" />
    </Main>
  );
}
