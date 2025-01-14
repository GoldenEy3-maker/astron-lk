import { useInfiniteQuery } from "@tanstack/react-query";
import { getNewsInfiniteQueryOptions } from "../api/news-query";
import { NewsCard } from "./news-card";
import { cn } from "@/shared/lib/cn";
import { NewsCardSkeleton } from "./news-card-skeleton";
import { Button } from "@/shared/ui/button";
import { TextMorph } from "@/shared/ui/text-morph";

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
        "grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(28rem,1fr))] gap-x-12 ~gap-y-8/11",
        className
      )}
      {...props}>
      {!isLoading
        ? data?.map((item) => <NewsCard key={item.id} {...item} />)
        : Array(limit || 2)
            .fill(null)
            .map((_, idx) => <NewsCardSkeleton key={idx} />)}
      {loadMore && hasNextPage ? (
        <div className="col-span-full flex justify-center">
          <Button
            variant="outline-primary"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}>
            <TextMorph as="span">
              {isFetchingNextPage ? "Загрузка..." : "Показать еще"}
            </TextMorph>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
