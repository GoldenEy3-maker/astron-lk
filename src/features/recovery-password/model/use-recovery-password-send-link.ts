import { apiClient } from "@/shared/api/client";
import { useMutation } from "@tanstack/react-query";
import { RecoveryPasswordSendLinkFormSchema } from "./recovery-password-send-link-form-schema";
import { AxiosError } from "axios";
import { toast } from "sonner";

type UseRecoveryPasswordSendLinkProps = {
  onSuccess?: () => void;
};

export function useRecoveryPasswordSendLink({
  onSuccess,
}: UseRecoveryPasswordSendLinkProps) {
  const recoveryPasswordSendLinkMutation = useMutation({
    mutationFn: apiClient.sendRecoveryPasswordLink,
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
    },
    onSuccess: () => {
      toast.success("Ссылка для восстановления пароля отправлена на почту");
      onSuccess?.();
    },
  });

  function recoveryPasswordSendLinkHandler(
    data: RecoveryPasswordSendLinkFormSchema
  ) {
    recoveryPasswordSendLinkMutation.mutate(data);
  }

  return {
    recoveryPasswordSendLinkHandler,
    isPending: recoveryPasswordSendLinkMutation.isPending,
  };
}
