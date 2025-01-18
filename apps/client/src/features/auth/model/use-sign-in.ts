import { getSessionQueryOptions } from "@/shared/api/session-query";
import { apiClient, schemas } from "@/shared/api/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";
import { useSessionStore } from "@/shared/store/session-store";

type UseSignInProps = {
  onSuccess?: () => void;
};

export function useSignIn({ onSuccess }: UseSignInProps = {}) {
  const [isUserBanned, setIsUserBanned] = useState(false);
  const setToken = useSessionStore((state) => state.setToken);
  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: apiClient.signIn,
    onMutate() {
      setIsUserBanned(false);
    },
    onSuccess(data) {
      setToken(data.accessToken);
      queryClient.setQueryData(getSessionQueryOptions().queryKey, data.user);
      onSuccess?.();
    },
    onError(error) {
      console.error(error);
    },
  });

  function signInHandler(data: z.infer<typeof schemas.signIn_Body>) {
    signInMutation.mutate(data);
  }

  return {
    signInHandler,
    isPending: signInMutation.isPending,
    isUserBanned,
    isError: signInMutation.isError,
    error: signInMutation.error,
  };
}
