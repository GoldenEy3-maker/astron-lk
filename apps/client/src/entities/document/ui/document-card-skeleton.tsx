import { cn } from "@/shared/lib/cn";
import { Skeleton } from "@/shared/ui/skeleton";

type DocumentCardSkeletonProps = {} & React.ComponentProps<"div">;

export function DocumentCardSkeleton({
  className,
  ...props
}: DocumentCardSkeletonProps) {
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col rounded-main bg-card ~px-4/7 ~py-3/5 before:absolute before:inset-0 before:-z-10 before:bg-[url(/pattern.webp)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-[0.06]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-4">
        <Skeleton className="h-8 w-36 rounded-full" />
      </div>
      <Skeleton className="mt-3 h-6 w-3/5 rounded-full" />
      <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-sm">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-5 w-24 rounded-full" />
      </div>
    </div>
  );
}
