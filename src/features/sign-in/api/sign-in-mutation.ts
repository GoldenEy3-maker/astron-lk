import { apiClient, schemas } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

type UseSignInProps = {
  onSuccess?: () => void;
};

export function useSignIn({ onSuccess }: UseSignInProps = {}) {
  const [isUserBanned, setIsUserBanned] = useState(false);

  const signInMutation = useMutation({
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

  function signInHandler(data: z.infer<typeof schemas.login_Body>) {
    signInMutation.mutate(data);
  }

  return { signInHandler, isPending: signInMutation.isPending, isUserBanned };
}
