import { apiClient, schemas } from "@/shared/api/client";
import { getSessionQueryOptions } from "@/shared/api/session-query";
import {
  InfiniteData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { z } from "zod";
import {
  DocumentsQueryFnData,
  getDocumentsInfiniteQueryOptions,
} from "../api/documents-query";
import { DocumentsLimits } from "../constants/documents-limits";

type UseDocumentsFavoritesProps = {
  onRemoveFavoritesExceedMinimum?: () => void;
  currentPage?: number;
};

export function useDocumentsFavorites(params?: UseDocumentsFavoritesProps) {
  const baseQueryKey = "favorites";

  const queryClient = useQueryClient();

  const { data: session } = useQuery(getSessionQueryOptions());

  function isFavorite(id: string) {
    return session?.favorites.includes(id);
  }

  const addFavoriteMutation = useMutation({
    mutationFn: (favorite: z.infer<typeof schemas.Favorite>) =>
      apiClient.addFavorite({ id: favorite.id }),
    onMutate: async (favorite) => {
      await Promise.all([
        queryClient.cancelQueries(getSessionQueryOptions()),
        queryClient.cancelQueries({ queryKey: [baseQueryKey] }),
      ]);

      const previousSession = queryClient.getQueryData(
        getSessionQueryOptions().queryKey,
      );
      const previousFavorites = queryClient.getQueryData(
        getDocumentsInfiniteQueryOptions({
          queryKey: baseQueryKey,
          limit: DocumentsLimits[baseQueryKey],
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
          limit: DocumentsLimits[baseQueryKey],
          queryKey: baseQueryKey,
          page: 1,
        }).queryKey,
        (oldData) => {
          if (!oldData?.pages?.[0]) return oldData;

          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              data: [
                favorite,
                ...page.data.filter((item) => item.id !== favorite.id),
              ],
            })),
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
          queryKey: baseQueryKey,
          limit: DocumentsLimits[baseQueryKey],
          page: 1,
        }).queryKey,
        context?.previousFavorites,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(getSessionQueryOptions());
      queryClient.invalidateQueries({ queryKey: [baseQueryKey] });
    },
  });

  const removeFavoriteMutation = useMutation({
    mutationFn: (favorite: z.infer<typeof schemas.Favorite>) =>
      apiClient.removeFavorite({ id: favorite.id }),
    onMutate: async (favorite) => {
      await Promise.all([
        queryClient.cancelQueries(getSessionQueryOptions()),
        queryClient.cancelQueries({ queryKey: [baseQueryKey] }),
      ]);

      const previousSession = queryClient.getQueryData(
        getSessionQueryOptions().queryKey,
      );
      const previousFavoritesQueries = queryClient.getQueriesData<
        InfiniteData<
          {
            data: DocumentsQueryFnData[];
            nextPage: number;
            totalPages: number;
          },
          number
        >
      >({
        queryKey: [baseQueryKey],
      });

      queryClient.setQueriesData<
        InfiniteData<
          {
            data: DocumentsQueryFnData[];
            nextPage: number;
            totalPages: number;
          },
          number
        >
      >({ queryKey: [baseQueryKey] }, (oldData) => {
        if (!oldData) return;

        return {
          ...oldData,
          pages: oldData.pages.map((page) => {
            const newData = page.data.filter((item) => item.id !== favorite.id);

            if (
              newData.length === 0 &&
              oldData.pageParams[0] === params?.currentPage
            )
              params?.onRemoveFavoritesExceedMinimum?.();

            return {
              ...page,
              data: newData,
            };
          }),
        };
      });

      queryClient.setQueryData(getSessionQueryOptions().queryKey, (oldData) => {
        if (!oldData) return;
        return {
          ...oldData,
          favorites: oldData.favorites.filter((id) => id !== favorite.id),
        };
      });

      return { previousSession, previousFavoritesQueries };
    },
    onError: (error, _, context) => {
      console.error(error);
      queryClient.setQueryData(
        getSessionQueryOptions().queryKey,
        context?.previousSession,
      );
      context?.previousFavoritesQueries.forEach((query) => {
        queryClient.setQueryData(query[0], query[1]);
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries(getSessionQueryOptions());
      queryClient.invalidateQueries({ queryKey: [baseQueryKey] });
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
