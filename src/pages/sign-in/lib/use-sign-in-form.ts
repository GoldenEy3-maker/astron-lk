import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSignIn } from "../api/sign-in-mutation";
import { LoginFormSchema, loginFormSchema } from "../model/sign-in-form-schema";
import { Routes } from "@/shared/constants/routes";

export function useSignInForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      login: "",
      password: "",
      remember: true,
    },
  });

  const { isPending, isUserBanned, signInHandler } = useSignIn({
    onSuccess() {
      form.reset();
      navigate(searchParams.get("callbackUrl") ?? Routes.Home);
    },
  });

  return { form, isPending, isUserBanned, signInHandler };
}
