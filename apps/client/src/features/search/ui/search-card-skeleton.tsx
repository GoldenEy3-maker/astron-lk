import { Skeleton } from "@/shared/ui/skeleton";

export function SearchCardSkeleton() {
  return (
    <div className="flex flex-col gap-3.5 py-7 border-b border-border/40 last:border-b-0">
      <div className="flex gap-4">
        <Skeleton className="h-3 w-16 rounded-full" />
        <Skeleton className="h-3 w-16 rounded-full" />
      </div>
      <Skeleton className="h-6 w-2/3 rounded-full" />
      <Skeleton className="h-4 w-1/2 rounded-full" />
    </div>
  );
}
