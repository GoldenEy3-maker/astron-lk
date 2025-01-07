import { apiClient } from "@/shared/api/client";
import { queryClient } from "@/shared/config/query-client";
import { Routes } from "@/shared/constants/routes";
import { useSession } from "@/shared/model/session-store";
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
    const session =
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query));

    useSession.setState({ user: session });

    return session;
  } catch (error) {
    console.error(error);
    return redirect(`${Routes.SignIn}?callbackUrl=${pathname}`);
  }
}
