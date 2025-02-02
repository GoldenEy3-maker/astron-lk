import { Button } from "@/shared/ui/button";
import { DocumentsCategoryFilter } from "./documents-category-filter";
import { Pagination } from "@/widgets/pagination";
import { useDocuments } from "../lib/use-documents";
import { DocumentsList } from "./documents-list";
import { GetDocumentsQueryKeys } from "../api/documents-query";
import { DocumentsDatePicker } from "./documents-date-picker";
import { DocumentsSort } from "./documents-sort";
import { DocumentsSortKeyMap } from "../constants/documents-sort-maps";
import { DocumentsLimits } from "../constants/documents-limits";

type DocumentsProps = {
  queryKey?: GetDocumentsQueryKeys;
  limit?: number;
  scrollToRef?: React.RefObject<HTMLDivElement>;
  documentsListClassName?: string;
  pagination?: boolean;
  loadMore?: boolean;
  datePicker?: boolean;
  sorting?: boolean;
  categoryFilter?: boolean;
} & React.ComponentProps<"div">;

export function Documents({
  limit,
  scrollToRef,
  queryKey = "documents",
  pagination,
  loadMore,
  datePicker,
  sorting,
  categoryFilter,
  documentsListClassName,
  ...props
}: DocumentsProps) {
  const {
    data,
    isLoading,
    displayedPage,
    isFetchingNextPage,
    hasNextPage,
    handlePageChange,
    category,
    onCategoryChange,
    sort,
    onSortChange,
    fromDateFilter,
    toDateFilter,
    onDateChange,
    onLoadMore,
    onPreviousPage,
    onNextPage,
  } = useDocuments({
    limit: limit ?? DocumentsLimits[queryKey],
    scrollToRef,
    queryKey,
  });

  return (
    <div {...props}>
      {datePicker || sorting || categoryFilter ? (
        <div className="flex flex-wrap items-center gap-y-2 ~mb-4/8 ~gap-x-4/8 sm:flex-nowrap">
          {datePicker ? (
            <DocumentsDatePicker
              date={{
                from: fromDateFilter ?? undefined,
                to: toDateFilter ?? undefined,
              }}
              // defaultFromDate={
              //   fromDateFilter ? getUTCDateFromDate(fromDateFilter) : undefined
              // }
              // defaultToDate={
              //   toDateFilter ? getUTCDateFromDate(toDateFilter) : undefined
              // }
              // onPickerClose={onDateChange}
              onDateChange={onDateChange}
            />
          ) : null}
          {sorting ? (
            <DocumentsSort
              sort={sort ?? undefined}
              onSortChange={onSortChange}
              options={Object.values(DocumentsSortKeyMap)}
            />
          ) : null}
          {categoryFilter ? (
            <div className="flex flex-1 justify-end">
              <DocumentsCategoryFilter
                queryKey={queryKey}
                category={category ?? undefined}
                onCategoryChange={onCategoryChange}
              />
            </div>
          ) : null}
        </div>
      ) : null}
      <DocumentsList
        isLoading={isLoading}
        documents={data?.documents}
        skeletons={limit ?? DocumentsLimits[queryKey]}
        className={documentsListClassName}
      />
      {loadMore && hasNextPage ? (
        <div className="mt-8 flex flex-col items-center">
          <Button
            variant="outline-primary"
            disabled={isFetchingNextPage}
            onClick={onLoadMore}
          >
            {isFetchingNextPage ? "Загружаем..." : "Показать еще"}
          </Button>
        </div>
      ) : null}
      {pagination && data?.totalPages && data.totalPages > 1 ? (
        <div className="mt-6 flex justify-center">
          <Pagination
            currentPage={displayedPage}
            totalPages={data.totalPages}
            onPageChange={handlePageChange}
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
          />
        </div>
      ) : null}
    </div>
  );
}
