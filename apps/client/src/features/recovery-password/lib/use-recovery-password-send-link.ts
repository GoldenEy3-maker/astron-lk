import { apiClient } from "@/shared/api/client";
import { useMutation } from "@tanstack/react-query";
import { RecoveryPasswordSendLinkFormSchema } from "../model/recovery-password-send-link-form-schema";

type UseRecoveryPasswordSendLinkProps = {
  onSuccess?: () => void;
};

export function useRecoveryPasswordSendLink({
  onSuccess,
}: UseRecoveryPasswordSendLinkProps) {
  const recoveryPasswordSendLinkMutation = useMutation({
    mutationFn: apiClient.sendRecoveryPasswordLink,
    onSuccess: onSuccess,
    onError: (error) => {
      console.error(error);
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
    isSuccess: recoveryPasswordSendLinkMutation.isSuccess,
    isError: recoveryPasswordSendLinkMutation.isError,
    error: recoveryPasswordSendLinkMutation.error,
  };
}
