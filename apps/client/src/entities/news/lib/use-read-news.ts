import { apiClient } from "@/shared/api/client";
import { getSessionQueryOptions } from "@/shared/api/session-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useReadNews() {
  const queryClient = useQueryClient();

  const readNewsMutation = useMutation({
    mutationFn: apiClient.readNews,
    onMutate: async (variables) => {
      queryClient.cancelQueries(getSessionQueryOptions());

      const previousSession = queryClient.getQueryData(
        getSessionQueryOptions().queryKey,
      );

      if (previousSession?.unreadNews)
        queryClient.setQueryData(getSessionQueryOptions().queryKey, (old) => {
          if (!old) return old;

          return {
            ...old,
            unreadNews: old.unreadNews?.filter((id) => id !== variables.id),
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

  function readNewsHandler(id: string) {
    readNewsMutation.mutate({ id });
  }

  return { readNewsHandler };
}
