import { cn } from "@/shared/lib/cn";
import { SearchCard } from "./search-card";
import { Pagination } from "@/widgets/pagination";
import { SearchCardSkeleton } from "./search-card-skeleton";
import { SearchForm } from "./search-form";
import { useSearch } from "../lib/use-search";

type SearchProps = {
  limit: number;
  scrollToRef: React.RefObject<HTMLDivElement>;
} & React.ComponentProps<"div">;

export function Search({
  className,
  limit,
  scrollToRef,
  ...props
}: SearchProps) {
  const {
    search,
    setSearch,
    query,
    page,
    submitHandler,
    onPaginationChange,
    data,
    isLoading,
  } = useSearch({
    limit,
    scrollToRef,
  });

  return (
    <div className={cn(className)} {...props}>
      <SearchForm
        query={query}
        value={search}
        onChange={setSearch}
        onSubmit={submitHandler}
        totalResults={data?.totalResults}
        isLoading={isLoading}
      />
      {query ? (
        <div className="~mt-6/8">
          {!isLoading ? (
            data?.result.length ? (
              data.result.map((item) => <SearchCard key={item.id} {...item} />)
            ) : (
              <p>Ничего не найдено</p>
            )
          ) : (
            Array.from({ length: limit }).map((_, index) => (
              <SearchCardSkeleton key={index} />
            ))
          )}
        </div>
      ) : null}
      {query && data?.totalPages && data.totalPages > 1 ? (
        <div className="~mt-6/8">
          <Pagination
            currentPage={page}
            totalPages={data.totalPages}
            onPageChange={onPaginationChange}
            onPreviousPage={() => onPaginationChange(page - 1)}
            onNextPage={() => onPaginationChange(page + 1)}
          />
        </div>
      ) : null}
    </div>
  );
}
