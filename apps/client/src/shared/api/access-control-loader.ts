import { LoaderFunction, redirect } from "react-router-dom";
import { queryClient } from "../config/query-client";
import { getSessionQueryOptions } from "./session-query";
import { z } from "zod";
import { schemas } from "./v1";

export function accessControlByRoleLoader(
  role: z.infer<typeof schemas.User>["role"]
): LoaderFunction {
  return async () => {
    const query = getSessionQueryOptions();
    try {
      await queryClient.prefetchQuery(query);
      const session = await queryClient.ensureQueryData(query);
      if (session.role !== role)
        return redirect(`/not-allowed?denied-role=${session.role}`);

      return true;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        // Если запрос был отменен, пробуем получить данные из кэша
        const cachedData = queryClient.getQueryData(query.queryKey);
        if (cachedData) {
          if (cachedData.role !== role)
            return redirect(`/not-allowed?denied-role=${cachedData.role}`);

          return true;
        }
        throw error;
      }
      console.error(error);
    }
  };
}
