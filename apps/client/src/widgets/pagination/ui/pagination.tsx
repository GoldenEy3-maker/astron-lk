import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/shared/ui/pagination";
import { Fragment } from "react/jsx-runtime";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
} & React.ComponentProps<typeof UIPagination>;

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  onPreviousPage,
  onNextPage,
  ...props
}: PaginationProps) {
  function getVisiblePages(currentPage: number, totalPages: number) {
    if (totalPages <= 6)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    const visiblePages = new Set<number>([
      1,
      2,
      3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ]);

    if (currentPage === 3) {
      visiblePages.add(4);
    }

    if (currentPage === totalPages - 2) {
      visiblePages.add(totalPages - 3);
    }

    if (currentPage > 3 && currentPage < totalPages - 2) {
      [currentPage - 1, currentPage, currentPage + 1].forEach((page) =>
        visiblePages.add(page)
      );
    }

    return Array.from(visiblePages).sort((a, b) => a - b);
  }

  return (
    <UIPagination {...props}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="shadow-[0_0_0.75rem_0] shadow-black/[0.03]"
            aria-disabled={currentPage === 1}
            onClick={(e) => {
              e.preventDefault();
              onPreviousPage();
            }}
          />
        </PaginationItem>
        {getVisiblePages(currentPage, totalPages).map(
          (pageNum, index, array) => (
            <Fragment key={pageNum}>
              <PaginationItem key={pageNum}>
                <PaginationLink
                  isActive={currentPage === pageNum}
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(pageNum);
                  }}>
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
              {array[index + 1] - pageNum > 1 && (
                <DropdownMenu key={`dropdown-menu-${pageNum}`}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-lg">
                      <PaginationEllipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="min-w-20">
                    {Array.from(
                      { length: array[index + 1] - pageNum - 1 },
                      (_, i) => (
                        <DropdownMenuItem
                          key={pageNum + i + 1}
                          onClick={() => onPageChange(pageNum + i + 1)}
                          className="w-full justify-center">
                          {pageNum + i + 1}
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </Fragment>
          )
        )}
        <PaginationItem>
          <PaginationNext
            className="shadow-[0_0_0.75rem_0] shadow-black/[0.03]"
            aria-disabled={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault();
              onNextPage();
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
}
