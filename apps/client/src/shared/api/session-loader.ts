import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getSessionQueryOptions } from "./session-query";
import { queryClient } from "../config/query-client";
import { Routes } from "../constants/routes";

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
      if (cachedData) return cachedData;
      throw error;
    }
    return redirect(
      `${Routes.SignIn}?callbackUrl=${
        pathname === "/cabinet/" ? "/" : pathname
      }`
    );
  }
}
