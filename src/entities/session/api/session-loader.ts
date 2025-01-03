import { apiClient } from "@/shared/api";
import { queryClient } from "@/shared/config/query-client";
import { Routes } from "@/shared/constants/routes";
import { useSession } from "@/shared/store/session";
import { queryOptions } from "@tanstack/react-query";
import { redirect } from "react-router-dom";

export function sessionQueryOptions() {
  return queryOptions({
    queryKey: ["session"],
    queryFn: ({ signal }) => apiClient.getSession({ signal }),
  });
}

export async function sessionLoader() {
  const query = sessionQueryOptions();
  try {
    const session =
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query));

    useSession.setState({ user: session });

    return session;
  } catch (error) {
    console.error(error);
    return redirect(Routes.SignIn);
  }
}
