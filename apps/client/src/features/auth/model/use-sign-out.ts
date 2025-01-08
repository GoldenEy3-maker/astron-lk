import { apiClient } from "@/shared/api/client";
import { Routes } from "@/shared/constants/routes";
import { useSession } from "@/shared/model/session-store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSignOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const destroySession = useSession((state) => state.destroy);

  const signOutMutation = useMutation({
    mutationFn: () => apiClient.signOut(),
    async onSettled() {
      await navigate(Routes.SignIn);
      destroySession();
      queryClient.removeQueries();
    },
  });

  function signOutHandler() {
    signOutMutation.mutate();
  }

  return { signOutHandler, isPending: signOutMutation.isPending };
}
