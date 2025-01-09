import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getDocumentsCategoriesQueryOptions,
  getDocumentsInfiniteQueryOptions,
} from "../api/documents-query";
import { DocumentCard } from "./document-card";
import { Button } from "@/shared/ui/button";
import { TextMorph } from "@/shared/ui/text-morph";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import {
  //  parseAsInteger,
  parseAsString,
  useQueryState,
} from "nuqs";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/shared/ui/pagination";

type DocumentsListProps = {
  limit?: number;
} & React.ComponentProps<"div">;

export function DocumentsList({ limit, ...props }: DocumentsListProps) {
  const [category, setCategory] = useQueryState("category", parseAsString);
  // const [page, setPage] = useQueryState("page", parseAsInteger);

  const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery(
      getDocumentsInfiniteQueryOptions({
        limit,
        category: category ?? undefined,
        // page: page ?? undefined,
      })
    );
  const { data: categories } = useQuery(getDocumentsCategoriesQueryOptions());

  return (
    <div {...props}>
      <div className="flex items-end justify-end">
        <Select
          value={category ?? undefined}
          onValueChange={(value) =>
            setCategory(value === "all" ? null : value)
          }>
          <SelectTrigger
            variant="ghost-primary"
            className="font-normal"
            size="sm">
            <SelectValue placeholder="Все категории" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="all">Все категории</SelectItem>
            {categories?.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(28rem,1fr))] gap-x-10 gap-y-9">
        {!isLoading && data ? (
          data?.documents?.map((item) => (
            <DocumentCard key={item.id} {...item} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="flex flex-col items-center mt-8">
        {hasNextPage ? (
          <Button
            variant="outline"
            disabled={isFetchingNextPage}
            onClick={async () => {
              await fetchNextPage();
              // setPage((prev) => (prev ?? 1) + 1);
            }}>
            <TextMorph as="span">
              {isFetchingNextPage ? "Загружаем..." : "Показать еще"}
            </TextMorph>
          </Button>
        ) : null}
        {/* {data?.totalPages && data.totalPages > 1 ? (
          <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              {data.totalPages <= 6
                ? Array.from({ length: data.totalPages }, (_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        isActive={page === index + 1}
                        onClick={() => setPage(index + 1)}>
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))
                : [
                    ...Array.from({ length: 3 }, (_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink
                          isActive={page === index + 1}
                          onClick={() => setPage(index + 1)}>
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )),
                    <PaginationEllipsis />,
                    ...Array.from({ length: 3 }, (_, index) => {
                      const pageNumber = data.totalPages! - 2 + index;
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink
                            isActive={page === pageNumber}
                            onClick={() => setPage(pageNumber)}>
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }),
                  ]}
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        ) : null} */}
      </div>
    </div>
  );
}
