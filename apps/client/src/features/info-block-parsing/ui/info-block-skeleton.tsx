import { cn } from "@/shared/lib/cn";
import { ImageSkeleton } from "@/shared/ui/image-skeleton";
import { Skeleton } from "@/shared/ui/skeleton";

type InfoBlockSckeletonProps = {} & Omit<
  React.ComponentProps<"div">,
  "children"
>;

export function InfoBlockSkeleton({
  className,
  ...props
}: InfoBlockSckeletonProps) {
  return (
    <div className={cn("space-y-5", className)} {...props}>
      <Skeleton className="h-7 w-2/4 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-3/4 rounded-full" />
        <Skeleton className="h-3 w-3/5 rounded-full" />
        <Skeleton className="h-3 w-1/2 rounded-full" />
      </div>
      <ImageSkeleton />
      <Skeleton className="h-7 w-2/4 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-3/4 rounded-full" />
        <Skeleton className="h-3 w-3/5 rounded-full" />
        <Skeleton className="h-3 w-1/2 rounded-full" />
      </div>
    </div>
  );
}
