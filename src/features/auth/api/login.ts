import { apiClient, schemas } from "@/shared/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";

export function useLogin() {
  const [isUserBanned, setIsUserBanned] = useState(false);

  const loginMutation = useMutation({
    mutationFn: apiClient.login,
    onMutate() {
      setIsUserBanned(false);
    },
    onError() {
      setIsUserBanned(true);
    },
  });

  function loginHandler(data: z.infer<typeof schemas.login_Body>) {
    loginMutation.mutate(data);
  }

  return { loginHandler, isPending: loginMutation.isPending, isUserBanned };
}
