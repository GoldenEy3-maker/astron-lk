import { Skeleton } from "@/shared/ui/skeleton";

export function NewsCardSkeleton() {
  return (
    <div className="bg-card rounded-main py-5 px-7 relative flex gap-4 items-start">
      <div className="flex-1">
        <Skeleton className="w-28 h-3" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-3 w-3/4" />
        </div>
        <div className="space-y-2 mt-4">
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-3/5" />
          <Skeleton className="h-3 w-2/4" />
        </div>
      </div>
      <Skeleton className="shrink-0 !rounded-main w-[9.375rem] h-[7.5rem]" />
    </div>
  );
}
