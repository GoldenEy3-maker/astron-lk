import { useScrollTo } from "@/shared/lib/use-scroll-to";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useQueryState, parseAsString, parseAsInteger } from "nuqs";
import { useState } from "react";
import { getSearchInfiniteQueryOptions } from "../api/search-query";

type UseSearchProps = {
  limit: number;
  scrollToRef: React.RefObject<HTMLDivElement>;
};

export function useSearch({ limit, scrollToRef }: UseSearchProps) {
  const [search, setSearch] = useQueryState(
    "query",
    parseAsString.withDefault(""),
  );
  const [query, setQuery] = useState(search);
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const { scrollTo } = useScrollTo({ ref: scrollToRef });

  const { data, isLoading } = useInfiniteQuery({
    ...getSearchInfiniteQueryOptions({ query, page, limit }),
    enabled: !!query,
  });

  function submitHandler() {
    setQuery(search);
    setPage(1);
  }

  function onPaginationChange(page: number) {
    setPage(page);
    scrollTo();
  }

  return {
    search,
    setSearch,
    query,
    page,
    submitHandler,
    onPaginationChange,
    data,
    isLoading,
  };
}
