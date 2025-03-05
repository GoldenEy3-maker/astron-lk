import { apiClient } from "@/shared/api/client";
import { queryOptions } from "@tanstack/react-query";
import { RetailingQueryType } from "../model/types";

type GetRetailingUploadedYearsQueryParams = {
  type: RetailingQueryType;
  partnerId?: string;
};

const BASE_RETAILING_QUERY_KEY = "retailing";

export function getRetailingUploadedYearsQueryOptions({
  type,
  partnerId,
}: GetRetailingUploadedYearsQueryParams) {
  return queryOptions({
    queryKey: [BASE_RETAILING_QUERY_KEY, "uploaded-years", type, partnerId],
    queryFn: ({ signal }) =>
      apiClient.getRetailingUploadedYears({
        queries: { type, partnerId },
        signal,
      }),
  });
}

type GetRetailingQuartersPlanQueryParams = {
  type: RetailingQueryType;
  year?: string;
  partnerId?: string;
};

export function getRetailingQuartersPlanQueryOptions({
  type,
  year,
  partnerId,
}: GetRetailingQuartersPlanQueryParams) {
  return queryOptions({
    queryKey: [
      BASE_RETAILING_QUERY_KEY,
      "quarters-plan",
      type,
      year,
      partnerId,
    ],
    queryFn: ({ signal }) =>
      apiClient.getRetailingQuartersPlan({
        queries: { type, partnerId, year: year ?? "" },
        signal,
      }),
    enabled: !!year,
  });
}

type GetRetailingListQueryParams = {
  type: RetailingQueryType;
  year?: string;
  partnerId?: string;
};

export function getRetailingListQueryOptions({
  type,
  partnerId,
  year,
}: GetRetailingListQueryParams) {
  return queryOptions({
    queryKey: [BASE_RETAILING_QUERY_KEY, "list", type, year, partnerId],
    queryFn: ({ signal }) =>
      apiClient.getRetailingList({
        queries: { type, partnerId, year: year ?? "" },
        signal,
      }),
    enabled: !!year,
  });
}
