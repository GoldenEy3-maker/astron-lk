import { apiClient, schemas } from "@/shared/api/client";
import { getSessionQueryOptions } from "@/shared/api/session-query";
import { queryClient } from "@/shared/config/query-client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { getDocumentsInfiniteQueryOptions } from "../api/documents-query";
import { DocumentsLimits } from "../constants/documents-limits";

export function useDocumentsFavorites() {
  const queryKey = "favorites";

  const { data: user } = useQuery(getSessionQueryOptions());

  function isFavorite(id: string) {
    return user?.favorites.includes(id);
  }

  const addFavoriteMutation = useMutation({
    mutationFn: (favorite: z.infer<typeof schemas.Favorite>) =>
      apiClient.addFavorite({ id: favorite.id }),
    onMutate: async (favorite) => {
      await Promise.all([
        queryClient.cancelQueries(getSessionQueryOptions()),
        queryClient.cancelQueries(
          getDocumentsInfiniteQueryOptions({
            // ...params,
            limit: DocumentsLimits[queryKey],
            queryKey,
            page: 1,
          }),
        ),
      ]);

      const previousSession = queryClient.getQueryData(
        getSessionQueryOptions().queryKey,
      );
      const previousFavorites = queryClient.getQueryData(
        getDocumentsInfiniteQueryOptions({
          // ...params,
          limit: DocumentsLimits[queryKey],
          queryKey,
          page: 1,
        }).queryKey,
      );

      queryClient.setQueryData(getSessionQueryOptions().queryKey, (oldData) => {
        if (!oldData) return;
        return {
          ...oldData,
          favorites: [favorite.id, ...oldData.favorites],
        };
      });

      queryClient.setQueryData(
        getDocumentsInfiniteQueryOptions({
          // ...params,
          limit: DocumentsLimits[queryKey],
          queryKey,
          page: 1,
        }).queryKey,
        (oldData) => {
          if (!oldData?.pages?.[0]) return oldData;
          return {
            ...oldData,
            pages: oldData.pages.map((page, index) =>
              index === 0
                ? {
                    ...page,
                    data: [favorite, ...page.data],
                  }
                : page,
            ),
          };
        },
      );

      return { previousSession, previousFavorites };
    },
    onError: (error, _variables, context) => {
      console.error(error);

      queryClient.setQueryData(
        getSessionQueryOptions().queryKey,
        context?.previousSession,
      );
      queryClient.setQueryData(
        getDocumentsInfiniteQueryOptions({
          // ...params,
          limit: DocumentsLimits[queryKey],
          queryKey,
          page: 1,
        }).queryKey,
        context?.previousFavorites,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(getSessionQueryOptions());
      queryClient.invalidateQueries(
        getDocumentsInfiniteQueryOptions({
          // ...params,
          limit: DocumentsLimits[queryKey],
          queryKey,
          page: 1,
        }),
      );
    },
  });

  const removeFavoriteMutation = useMutation({
    mutationFn: (favorite: z.infer<typeof schemas.Favorite>) =>
      apiClient.removeFavorite({ id: favorite.id }),
    onMutate: async (favorite) => {
      await Promise.all([
        queryClient.cancelQueries(getSessionQueryOptions()),
        queryClient.cancelQueries(
          getDocumentsInfiniteQueryOptions({
            // ...params,
            limit: DocumentsLimits[queryKey],
            queryKey,
            page: 1,
          }),
        ),
      ]);

      const previousSession = queryClient.getQueryData(
        getSessionQueryOptions().queryKey,
      );
      const previousFavorites = queryClient.getQueryData(
        getDocumentsInfiniteQueryOptions({
          // ...params,
          limit: DocumentsLimits[queryKey],
          queryKey,
          page: 1,
        }).queryKey,
      );

      queryClient.setQueryData(getSessionQueryOptions().queryKey, (oldData) => {
        if (!oldData) return;
        return {
          ...oldData,
          favorites: oldData.favorites.filter((id) => id !== favorite.id),
        };
      });

      queryClient.setQueryData(
        getDocumentsInfiniteQueryOptions({
          // ...params,
          limit: DocumentsLimits[queryKey],
          queryKey,
          page: 1,
        }).queryKey,
        (oldData) => {
          if (!oldData?.pages) return oldData;
          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              data: page.data.filter((item) => item.id !== favorite.id),
            })),
          };
        },
      );

      return { previousSession, previousFavorites };
    },
    onError: (error, _, context) => {
      console.error(error);
      // Восстанавливаем данные при ошибке
      queryClient.setQueryData(
        getSessionQueryOptions().queryKey,
        context?.previousSession,
      );
      queryClient.setQueryData(
        getDocumentsInfiniteQueryOptions({
          // ...params,
          limit: DocumentsLimits[queryKey],
          queryKey,
          page: 1,
        }).queryKey,
        context?.previousFavorites,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(getSessionQueryOptions());
      queryClient.invalidateQueries(
        getDocumentsInfiniteQueryOptions({
          // ...params,
          limit: DocumentsLimits[queryKey],
          queryKey,
          page: 1,
        }),
      );
    },
  });

  function toggleFavorite(favorite: z.infer<typeof schemas.Favorite>) {
    if (isFavorite(favorite.id)) {
      removeFavoriteMutation.mutate(favorite);
    } else {
      addFavoriteMutation.mutate(favorite);
    }
  }

  return { isFavorite, toggleFavorite };
}
