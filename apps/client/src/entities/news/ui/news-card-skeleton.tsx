import { Skeleton } from "@/shared/ui/skeleton";

export function NewsCardSkeleton() {
  return (
    <div className="relative flex flex-col items-start gap-4 rounded-main bg-card px-7 py-5 sm:flex-row">
      <div className="w-full flex-1">
        <Skeleton className="h-3 w-28 !rounded-full" />
        <div className="mt-4 space-y-2">
          <Skeleton className="h-3 w-3/4 !rounded-full" />
        </div>
        <div className="mt-4 space-y-2">
          <Skeleton className="h-3 w-3/4 !rounded-full" />
          <Skeleton className="h-3 w-3/5 !rounded-full" />
          <Skeleton className="h-3 w-2/4 !rounded-full" />
        </div>
      </div>
      <Skeleton className="h-[7.5rem] w-[9.375rem] shrink-0 !rounded-main" />
    </div>
  );
}
