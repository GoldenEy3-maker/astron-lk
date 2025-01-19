import { apiClient } from "@/shared/api/client";
import { useMutation } from "@tanstack/react-query";
import { ChangePasswordFormSchema } from "../model/change-password-form-schema";
import { AxiosError } from "axios";
import { toast } from "sonner";

type UseChangePasswordProps = {
  onSuccess?: () => void;
};

export function useChangePassword({ onSuccess }: UseChangePasswordProps = {}) {
  const changePasswordMutation = useMutation({
    mutationFn: apiClient.changeUserPassword,
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      }
      console.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      onSuccess?.();
    },
  });

  function changePasswordHandler({
    password,
    newPassword,
  }: ChangePasswordFormSchema) {
    changePasswordMutation.mutate({ newPassword, password });
  }

  return { changePasswordHandler, isPending: changePasswordMutation.isPending };
}
