import { DocumentCard } from "./document-card";
import { Button } from "@/shared/ui/button";
import { TextMorph } from "@/shared/ui/text-morph";
import { DocumentCardSkeleton } from "./document-card-skeleton";
import { DocumentsCategoryFilter } from "./documents-category-filter";
import { Pagination } from "@/widgets/pagination";
import { useDocumentsList } from "../lib/use-documents-list";

type DocumentsListProps = {
  limit?: number;
} & React.ComponentProps<"div">;

export function DocumentsList({ limit, ...props }: DocumentsListProps) {
  const {
    data,
    isLoading,
    displayedPage,
    isFetchingNextPage,
    hasNextPage,
    handlePageChange,
    category,
    onCategoryChange,
    onLoadMore,
    onPagitaionChangeScrollToRef,
    onPreviousPage,
    onNextPage,
  } = useDocumentsList({ limit: limit ?? 12 });

  return (
    <div {...props}>
      <div
        className="flex items-end justify-end"
        ref={onPagitaionChangeScrollToRef}>
        <DocumentsCategoryFilter
          category={category ?? undefined}
          onCategoryChange={onCategoryChange}
        />
      </div>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(28rem,1fr))] gap-x-10 gap-y-9">
        {!isLoading && data
          ? data?.documents?.map((item) => (
              <DocumentCard key={item.id} {...item} />
            ))
          : Array.from({ length: limit ?? 12 }).map((_, index) => (
              <DocumentCardSkeleton key={index} />
            ))}
      </div>
      <div className="flex flex-col items-center mt-8">
        {hasNextPage ? (
          <Button
            variant="outline"
            disabled={isFetchingNextPage}
            className="bg-transparent"
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
