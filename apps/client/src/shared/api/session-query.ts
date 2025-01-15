import { apiClient } from "@/shared/api/client";
import { queryClient } from "@/shared/config/query-client";
import { Routes } from "@/shared/constants/routes";
import { queryOptions } from "@tanstack/react-query";
import { LoaderFunctionArgs, redirect } from "react-router-dom";

export function getSessionQueryOptions() {
  return queryOptions({
    queryKey: ["user", "session"],
    queryFn: ({ signal }) => apiClient.getSession({ signal }),
  });
}

export async function getSessionLoader({ request }: LoaderFunctionArgs) {
  const query = getSessionQueryOptions();
  const { pathname } = new URL(request.url);
  try {
    await queryClient.prefetchQuery(query);
    return await queryClient.ensureQueryData(query);
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      // Если запрос был отменен, пробуем получить данные из кэша
      const cachedData = queryClient.getQueryData(query.queryKey);
      if (cachedData) {
        return cachedData;
      }
      throw error;
    }
    console.error(error);
    return redirect(`${Routes.SignIn}?callbackUrl=${pathname}`);
  }
}
