import { Skeleton } from "@/shared/ui/skeleton";

export function PartnerCardInListSkeleton() {
  return (
    <div className="relative col-span-full grid grid-cols-subgrid items-center gap-y-4 border-b border-stroke py-5 last:border-none">
      <Skeleton className="h-[3.375rem] w-[4.75rem] !rounded-main" />
      <Skeleton className="h-6 w-2/3 rounded-full" />
      <div className="col-span-full flex flex-wrap gap-x-5 gap-y-2 md:col-span-1 min-[54.75rem]:flex-nowrap m-md:col-span-full m-md:flex-wrap m-xl:col-span-1 m-xl:flex-nowrap">
        <div className="flex min-w-52 flex-1 gap-3">
          <Skeleton className="h-[2.875rem] w-[2.875rem] shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-y-2">
            <Skeleton className="h-4 w-1/2 rounded-full" />
            <Skeleton className="h-4 w-full rounded-full" />
          </div>
        </div>
        <div className="flex min-w-52 flex-1 gap-3">
          <Skeleton className="h-[2.875rem] w-[2.875rem] shrink-0 rounded-full" />
          <div className="flex flex-1 flex-col gap-y-2">
            <Skeleton className="h-4 w-1/2 rounded-full" />
            <Skeleton className="h-4 w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
