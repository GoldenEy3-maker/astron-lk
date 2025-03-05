import { useInfiniteQuery } from "@tanstack/react-query";
import { getNewsInfiniteQueryOptions } from "../api/news-query";
import { NewsCard } from "./news-card";
import { cn } from "@/shared/lib/cn";
import { NewsCardSkeleton } from "./news-card-skeleton";
import { Button } from "@/shared/ui/button";

type NewsProps = {
  limit: number;
  loadMore?: boolean;
} & React.ComponentProps<"div">;

export function News({ limit, className, loadMore, ...props }: NewsProps) {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(getNewsInfiniteQueryOptions({ limit }));

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-12 ~gap-y-8/11 sm:grid-cols-[repeat(auto-fill,minmax(28rem,1fr))]",
        className,
      )}
      {...props}
    >
      {!isLoading
        ? data?.map((item) => <NewsCard key={item.id} {...item} />)
        : Array.from({ length: limit || 2 }, (_, idx) => (
            <NewsCardSkeleton key={idx} />
          ))}
      {loadMore && hasNextPage ? (
        <div className="col-span-full flex justify-center">
          <Button
            variant="outline-primary"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Загрузка..." : "Показать еще"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
