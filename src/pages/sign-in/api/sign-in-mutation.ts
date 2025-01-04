import { getSessionQueryOptions } from "@/entities/session";
import { apiClient, schemas } from "@/shared/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

type UseSignInProps = {
  onSuccess?: () => void;
};

export function useSignIn({ onSuccess }: UseSignInProps = {}) {
  const [isUserBanned, setIsUserBanned] = useState(false);
  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: apiClient.signIn,
    onMutate() {
      setIsUserBanned(false);
    },
    onSuccess(data) {
      queryClient.setQueryData(getSessionQueryOptions().queryKey, data.user);
      onSuccess?.();
    },
    onError(error) {
      if (error instanceof AxiosError) {
        if (error.status === 403) return setIsUserBanned(true);
        toast.error(error.response?.data.message, {
          position: "bottom-center",
        });
      } else {
        console.error(error);
      }
    },
  });

  function signInHandler(data: z.infer<typeof schemas.signIn_Body>) {
    signInMutation.mutate(data);
  }

  return { signInHandler, isPending: signInMutation.isPending, isUserBanned };
}
