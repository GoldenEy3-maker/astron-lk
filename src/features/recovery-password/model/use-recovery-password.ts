import { useMutation } from "@tanstack/react-query";
import { apiClient } from "@/shared/api/client";
import { RecoveryPasswordFormSchema } from "./recovery-password-form-schema";
import { AxiosError } from "axios";
import { toast } from "sonner";

export function useRecoveryPassword(token: string) {
  const recoveryPasswordMutation = useMutation({
    mutationFn: apiClient.recoveryUserPassword,
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
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
  };
}
