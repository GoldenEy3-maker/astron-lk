import { Slot } from "@radix-ui/react-slot";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/shared/lib/cn";

type BreadcrumbsProps = React.ComponentPropsWithRef<"nav"> & {
  separator?: React.ReactNode;
};

function Breadcrumb({ ...props }: BreadcrumbsProps) {
  return <nav aria-label="breadcrumb" {...props} />;
}

type BreadcrumbListProps = React.ComponentPropsWithRef<"ol">;

function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 break-words text-sm text-muted",
        className
      )}
      {...props}
    />
  );
}

type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li">;

function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

type BreadcrumbLinkProps = React.ComponentPropsWithRef<"a"> & {
  asChild?: boolean;
};

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
}

type BreadcrumbPageProps = React.ComponentPropsWithRef<"span">;

function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  );
}

type BreadcrumbSeparatorProps = React.ComponentPropsWithRef<"li">;

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
      {...props}>
      {children ?? "—"}
    </li>
  );
}

type BreadcrumbEllipsisProps = React.ComponentPropsWithRef<"span">;

function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...props}>
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
