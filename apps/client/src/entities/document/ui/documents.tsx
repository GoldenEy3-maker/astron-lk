import { Button } from "@/shared/ui/button";
import { TextMorph } from "@/shared/ui/text-morph";
import { DocumentsCategoryFilter } from "./documents-category-filter";
import { Pagination } from "@/widgets/pagination";
import { useDocuments } from "../lib/use-documents";
import { DocumentsList } from "./documents-list";

type DocumentsProps = {
  limit: number;
} & React.ComponentProps<"div">;

export function Documents({ limit, ...props }: DocumentsProps) {
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
  } = useDocuments({ limit });

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
      <DocumentsList
        isLoading={isLoading}
        documents={data?.documents}
        limit={limit}
      />
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
