import { api } from "@/shared/api";
import { queryOptions } from "@tanstack/react-query";

export function getUsersQueryOptions() {
  return queryOptions({
    queryKey: ["users", "list"],
    queryFn: ({ signal }) => api.listUsers({ signal }),
  });
}