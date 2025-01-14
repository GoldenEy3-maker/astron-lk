import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/shared/api/client";
import { RecoveryPasswordFormSchema } from "../model/recovery-password-form-schema";

export function useRecoveryPassword(token: string) {
  const recoveryPasswordMutation = useMutation({
    mutationFn: apiClient.recoveryUserPassword,
    onError: (error) => {
      console.error(error);
    },
  });

  function recoveryPasswordHandler({ password }: RecoveryPasswordFormSchema) {
    recoveryPasswordMutation.mutate({
      password,
      token,
    });
  }

  return {
    recoveryPasswordHandler,
    isPending: recoveryPasswordMutation.isPending,
    isSuccess: recoveryPasswordMutation.isSuccess,
    isError: recoveryPasswordMutation.isError,
    error: recoveryPasswordMutation.error,
  };
}
