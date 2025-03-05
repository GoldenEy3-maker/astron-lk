import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";

type GetLeadGenerationQueryOptionsParams = {
  year?: string;
  partnerId?: string;
};

export const BASE_LEAD_GENERATION_QUERY_KEY = "lead-generation";

export function getLeadGenerationPlanQueryOptions(
  params?: GetLeadGenerationQueryOptionsParams,
) {
  return queryOptions({
    queryKey: [
      BASE_LEAD_GENERATION_QUERY_KEY,
      "plan",
      params?.year,
      params?.partnerId,
    ],
    queryFn: ({ signal }) =>
      apiClient.getLeadGenerationPlan({
        queries: { year: params?.year ?? "", partnerId: params?.partnerId },
        signal,
      }),
    enabled: !!params?.year,
  });
}

export function getLeadGenerationUploadedYearsQueryOptions(partnerId?: string) {
  return queryOptions({
    queryKey: [BASE_LEAD_GENERATION_QUERY_KEY, "uploaded-years", partnerId],
    queryFn: ({ signal }) =>
      apiClient.getLeadGenerationUploadedYears({
        queries: { partnerId },
        signal,
      }),
  });
}

export function getLeadGenerationListQueryOptions(
  params?: GetLeadGenerationQueryOptionsParams,
) {
  return queryOptions({
    queryKey: [
      BASE_LEAD_GENERATION_QUERY_KEY,
      "list",
      params?.year,
      params?.partnerId,
    ],
    queryFn: ({ signal }) =>
      apiClient.getLeadGenerationList({
        queries: { year: params?.year ?? "", partnerId: params?.partnerId },
        signal,
      }),
    enabled: !!params?.year,
  });
}
