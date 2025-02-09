import { apiClient } from "@/shared/api/client";
import { getSessionQueryOptions } from "@/shared/api/session-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useReadBulletins() {
  const queryClient = useQueryClient();

  const readBulletinsMutation = useMutation({
    mutationFn: apiClient.readBulletin,
    onMutate: async (variables) => {
      queryClient.cancelQueries(getSessionQueryOptions());

      const previousSession = queryClient.getQueryData(
        getSessionQueryOptions().queryKey,
      );

      if (previousSession?.unreadBulletins)
        queryClient.setQueryData(getSessionQueryOptions().queryKey, (old) => {
          if (!old) return old;

          return {
            ...old,
            unreadBulletins: old.unreadBulletins?.filter(
              (id) => id !== variables.id,
            ),
          };
        });

      return { previousSession };
    },
    onError: (error, _variables, context) => {
      console.error(error);

      queryClient.setQueryData(
        getSessionQueryOptions().queryKey,
        context?.previousSession,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(getSessionQueryOptions());
    },
  });

  function readBulletinsHandler(id: string) {
    readBulletinsMutation.mutate({ id });
  }

  return { readBulletinsHandler };
}
