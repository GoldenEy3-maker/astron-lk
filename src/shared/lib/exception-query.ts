import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";

export function useExceptionQuery<
  TQueryFnData = unknown,
  TError = Error,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(opts: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>) {
  const queryResult = useQuery<TQueryFnData, TError, TData, TQueryKey>(opts);

  const { isError, error, ...restResult } = queryResult;

  if (isError) throw error;

  return restResult;
}
