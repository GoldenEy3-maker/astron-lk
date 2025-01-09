import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ChangePasswordFormSchema,
  changePasswordFormSchema,
} from "../model/change-password-form-schema";
import { useChangePassword } from "./use-change-password";

type UseChangePasswordFormProps = {
  onSuccess?: () => void;
};

export function useChangePasswordForm({
  onSuccess,
}: UseChangePasswordFormProps = {}) {
  const form = useForm<ChangePasswordFormSchema>({
    resolver: zodResolver(changePasswordFormSchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { changePasswordHandler, isPending } = useChangePassword({
    onSuccess: () => {
      form.reset();
      onSuccess?.();
    },
  });

  return { form, changePasswordHandler, isPending };
}
