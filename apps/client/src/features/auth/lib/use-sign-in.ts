import { getSessionQueryOptions } from "@/shared/api/session-query";
import { apiClient, schemas } from "@/shared/api/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";
import { useSessionStore } from "@/shared/store/session-store";
import { toast } from "sonner";
import { AxiosError } from "axios";

type UseSignInProps = {
  onSuccess?: () => void;
};

export function useSignIn({ onSuccess }: UseSignInProps = {}) {
  const [isUserBanned, setIsUserBanned] = useState(false);
  const setToken = useSessionStore((state) => state.setToken);
  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: apiClient.signIn,
    onMutate: () => {
      setIsUserBanned(false);
    },
    onSuccess: (data) => {
      queryClient.resetQueries();
      queryClient.removeQueries();

      setToken(data.accessToken);
      queryClient.setQueryData(getSessionQueryOptions().queryKey, data.user);

      toast.success("Вы успешно авторизовались!", {
        position: "bottom-center",
      });

      onSuccess?.();
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 403) setIsUserBanned(true);
        else
          toast.error(error.response?.data.message, {
            position: "bottom-center",
          });
      }

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
  };
}
