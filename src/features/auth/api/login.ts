import { apiClient, schemas } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

type UseLogingProps = {
  onSuccess?: () => void;
};

export function useLogin({ onSuccess }: UseLogingProps = {}) {
  const [isUserBanned, setIsUserBanned] = useState(false);

  const loginMutation = useMutation({
    mutationFn: apiClient.login,
    onMutate() {
      setIsUserBanned(false);
    },
    onSuccess,
    onError(error) {
      if (error instanceof AxiosError) {
        if (error.status === 403) return setIsUserBanned(true);
        toast.error(error.response?.data.message);
      } else {
        console.error(error);
      }
    },
  });

  function loginHandler(data: z.infer<typeof schemas.login_Body>) {
    loginMutation.mutate(data);
  }

  return { loginHandler, isPending: loginMutation.isPending, isUserBanned };
}
