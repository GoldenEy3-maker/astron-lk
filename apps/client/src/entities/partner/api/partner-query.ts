import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";
import { PartnersSortKeyMap } from "../constants/partners-sort-maps";

export function getPartnerByIdQueryOptions(id: string) {
  return queryOptions({
    queryKey: ["partners", "by", id],
    queryFn: ({ signal }) =>
      apiClient.getPartnerById({ params: { id }, signal }),
  });
}

export function getPartnerBySessionQueryOptions() {
  return queryOptions({
    queryKey: ["partners", "by", "session"],
    queryFn: ({ signal }) => apiClient.getPartnerBySession({ signal }),
  });
}

export function getPartnersQueryOptions(sort?: PartnersSortKeyMap) {
  return queryOptions({
    queryKey: ["partners", "sortBy", sort],
    queryFn: ({ signal }) =>
      apiClient.getPartners({ signal, queries: { sort } }),
  });
}
