import { Skeleton } from "@/shared/ui/skeleton";

export function AcademySectionCardSkeleton() {
  return (
    <div className="flex w-full flex-col rounded-main bg-primary/10 p-7 ~min-h-[12rem]/[17.5rem]">
      <div className="flex items-start justify-between gap-6">
        <Skeleton className="h-7 w-3/5 rounded-full" />
        <Skeleton className="shrink-0 rounded-full ~size-10/[3.75rem]" />
      </div>
      <div className="mt-auto">
        <Skeleton className="h-4 w-1/4 rounded-full" />
      </div>
    </div>
  );
}
