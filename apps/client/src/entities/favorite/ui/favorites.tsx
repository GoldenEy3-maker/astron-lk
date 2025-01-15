import { DocumentsList } from "@/entities/document";
import { useFavoritesList } from "../lib/use-favorites-list";
import { Button } from "@/shared/ui/button";
import { TextMorph } from "@/shared/ui/text-morph";
import { Pagination } from "@/widgets/pagination";

type FavoritesProps = {
  limit: number;
  scrollToRef?: React.RefObject<HTMLDivElement>;
} & React.ComponentProps<"div">;

export function Favorites({ limit, scrollToRef, ...props }: FavoritesProps) {
  const {
    data,
    displayedPage,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    handlePageChange,
    onLoadMore,
    onPreviousPage,
    onNextPage,
  } = useFavoritesList({ limit: 12, scrollToRef });

  return (
    <div {...props}>
      <DocumentsList
        isLoading={isLoading}
        documents={data?.favorites}
        limit={limit}
      />
      <div className="flex flex-col items-center mt-8">
        {hasNextPage ? (
          <Button
            variant="outline-primary"
            disabled={isFetchingNextPage}
            onClick={onLoadMore}>
            <TextMorph as="span">
              {isFetchingNextPage ? "Загружаем..." : "Показать еще"}
            </TextMorph>
          </Button>
        ) : null}
        {data?.totalPages && data.totalPages > 1 ? (
          <Pagination
            className="mt-6"
            currentPage={displayedPage}
            totalPages={data.totalPages}
            onPageChange={handlePageChange}
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
          />
        ) : null}
      </div>
    </div>
  );
}
