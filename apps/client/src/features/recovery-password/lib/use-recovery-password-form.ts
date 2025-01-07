import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  RecoveryPasswordFormSchema,
  recoveryPasswordFormSchema,
} from "../model/recovery-password-form-schema";
import { useRecoveryPassword } from "./use-recovery-password";

export function useRecoveryPasswordForm(token: string) {
  const form = useForm<RecoveryPasswordFormSchema>({
    resolver: zodResolver(recoveryPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { recoveryPasswordHandler, isPending, isSuccess } =
    useRecoveryPassword(token);

  const isPasswordNotSecured = form.formState.errors.password;

  return {
    form,
    isPasswordNotSecured,
    recoveryPasswordHandler,
    isPending,
    isSuccess,
  };
}
