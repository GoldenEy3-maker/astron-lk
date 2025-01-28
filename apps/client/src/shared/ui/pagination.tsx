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

type PaginationContentProps = React.ComponentPropsWithRef<"ul">;

function PaginationContent({ className, ...props }: PaginationContentProps) {
  return (
    <ul
      className={cn("flex flex-row items-center ~gap-1/3", className)}
      {...props}
    />
  );
}

type PaginationItemProps = React.ComponentPropsWithRef<"li">;

function PaginationItem(props: PaginationItemProps) {
  return <li {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size" | "variant"> &
  React.ComponentPropsWithRef<"a">;

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
        variant: isActive ? "outline-primary" : variant,
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

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Предыдущая страница"
    variant="default-reverse"
    className={cn("~mr-1/7", className)}
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
    className={cn("~ml-1/7", className)}
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
