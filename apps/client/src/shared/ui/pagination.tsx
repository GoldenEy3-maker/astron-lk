import * as React from "react";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/shared/lib/cn";
import { ButtonProps, buttonVariants } from "@/shared/ui/button";
import { Link } from "react-router-dom";
import { Icons } from "./icons";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center ~gap-2/3", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size" | "variant"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon-lg",
  variant = "ghost-primary",
  tabIndex,
  ...props
}: PaginationLinkProps) => (
  <Link
    to={props.href ?? ""}
    aria-current={isActive ? "page" : undefined}
    tabIndex={props["aria-disabled"] ? -1 : tabIndex}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : variant,
        size,
      }),
      className,
      {
        "bg-transparent": isActive,
      }
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Предыдущая страница"
    variant="default-reverse"
    className={cn("~mr-3/7", className)}
    {...props}>
    <Icons.ChevronLeft className="mr-0.5" />
    <span className="sr-only">Предыдущая страница</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    variant="default-reverse"
    aria-label="Следующая страница"
    className={cn("~ml-3/7", className)}
    {...props}>
    <Icons.ChevronRight className="ml-0.5" />
    <span className="sr-only">Следующая страница</span>
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Еще страницы</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
