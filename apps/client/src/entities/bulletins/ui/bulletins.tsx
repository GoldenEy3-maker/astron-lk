import { Button } from "@/shared/ui/button";
import { TextMorph } from "@/shared/ui/text-morph";
import { Pagination } from "@/widgets/pagination";
import { useBulletins } from "../lib/use-bulletins";
import { BulletinsList } from "./bulletins-list";
import { BulletinsCategoryFilter } from "./bulletins-category-filter";
import { BulletinsSort } from "./bulletins-sort";
import { BulletinsSortKeys } from "../model/bulletins-sort-keys";
import { BulletinsDatePicker } from "./bulletins-date-picker";
import { getUTCDateFromDate } from "@/shared/lib/get-utc-date";

type BulletinsProps = {
  limit: number;
  scrollToRef?: React.RefObject<HTMLDivElement>;
} & React.ComponentProps<"div">;

export function Bulletins({ limit, scrollToRef, ...props }: BulletinsProps) {
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
    onPagitaionChangeScrollToRef,
    onPreviousPage,
    onNextPage,
  } = useBulletins({ limit, scrollToRef });

  return (
    <div {...props}>
      <div
        className="flex items-center ~gap-x-4/8 flex-wrap sm:flex-nowrap gap-y-2"
        ref={onPagitaionChangeScrollToRef}>
        <BulletinsDatePicker
          date={{
            from: fromDateFilter
              ? getUTCDateFromDate(fromDateFilter)
              : undefined,
            to: toDateFilter ? getUTCDateFromDate(toDateFilter) : undefined,
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
        <div className="flex-1">
          <BulletinsSort
            sort={sort ?? undefined}
            onSortChange={onSortChange}
            options={Object.values(BulletinsSortKeys)}
          />
        </div>
        <BulletinsCategoryFilter
          category={category ?? undefined}
          onCategoryChange={onCategoryChange}
        />
      </div>
      <BulletinsList
        isLoading={isLoading}
        bulletins={data?.bulletins}
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
