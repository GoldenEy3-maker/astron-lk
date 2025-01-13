import { Skeleton } from "@/shared/ui/skeleton";

export function NewsCardSkeleton() {
  return (
    <div className="bg-card rounded-main py-5 px-7 relative flex flex-col sm:flex-row gap-4 items-start">
      <div className="flex-1 w-full">
        <Skeleton className="w-28 h-3 !rounded-full" />
        <div className="space-y-2 mt-4">
          <Skeleton className="h-3 w-3/4 !rounded-full" />
        </div>
        <div className="space-y-2 mt-4">
          <Skeleton className="h-3 w-3/4 !rounded-full" />
          <Skeleton className="h-3 w-3/5 !rounded-full" />
          <Skeleton className="h-3 w-2/4 !rounded-full" />
        </div>
      </div>
      <Skeleton className="shrink-0 !rounded-main w-[9.375rem] h-[7.5rem]" />
    </div>
  );
}
