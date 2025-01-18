import { apiClient } from "@/shared/api/client";
import { Routes } from "@/shared/constants/routes";
import { useSessionStore } from "@/shared/store/session-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const setToken = useSessionStore((state) => state.setToken);

  const signOutMutation = useMutation({
    mutationFn: () => apiClient.signOut(),
    async onSettled() {
      await navigate(Routes.SignIn);
      setToken(null);
      queryClient.resetQueries();
      queryClient.removeQueries();
    },
  });

  function signOutHandler() {
    signOutMutation.mutate();
  }

  return { signOutHandler, isPending: signOutMutation.isPending };
}
