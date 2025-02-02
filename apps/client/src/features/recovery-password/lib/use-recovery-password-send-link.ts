import { apiClient } from "@/shared/api/client";
import { useMutation } from "@tanstack/react-query";
import { RecoveryPasswordSendLinkFormSchema } from "../model/recovery-password-send-link-form-schema";
import { toast } from "sonner";
import { AxiosError } from "axios";

type UseRecoveryPasswordSendLinkProps = {
  onSuccess?: () => void;
};

export function useRecoveryPasswordSendLink({
  onSuccess,
}: UseRecoveryPasswordSendLinkProps) {
  const recoveryPasswordSendLinkMutation = useMutation({
    mutationFn: apiClient.sendRecoveryPasswordLink,
    onSuccess: (data) => {
      toast.success(data.message, {
        position: "bottom-center",
      });
      onSuccess?.();
    },
    onError: (error) => {
      if (error instanceof AxiosError)
        toast.error(error.response?.data.message, {
          position: "bottom-center",
        });

      console.error(error);
    },
  });

  function recoveryPasswordSendLinkHandler(
    data: RecoveryPasswordSendLinkFormSchema,
  ) {
    recoveryPasswordSendLinkMutation.mutate(data);
  }

  return {
    recoveryPasswordSendLinkHandler,
    isPending: recoveryPasswordSendLinkMutation.isPending,
  };
}
