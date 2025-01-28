import { Skeleton } from "@/shared/ui/skeleton";

export function PartnerCardInListSkeleton() {
  return (
    <div className="grid relative grid-cols-subgrid gap-y-4 py-5 last:border-none border-b border-stroke items-center col-span-full">
      <Skeleton className="w-[4.75rem] !rounded-main h-[3.375rem]" />
      <Skeleton className="w-2/3 h-6 rounded-full" />
      <div className="flex gap-x-5 gap-y-2 md:col-span-1 col-span-full m-md:col-span-full m-xl:flex-nowrap min-[54.75rem]:flex-nowrap flex-wrap m-md:flex-wrap m-xl:col-span-1">
        <div className="flex gap-3 min-w-52 flex-1">
          <Skeleton className="w-[2.875rem] shrink-0 h-[2.875rem] rounded-full" />
          <div className="flex flex-col flex-1 gap-y-2">
            <Skeleton className="w-1/2 h-4 rounded-full" />
            <Skeleton className="w-full h-4 rounded-full" />
          </div>
        </div>
        <div className="flex gap-3 min-w-52 flex-1">
          <Skeleton className="w-[2.875rem] shrink-0 h-[2.875rem] rounded-full" />
          <div className="flex flex-1 flex-col gap-y-2">
            <Skeleton className="w-1/2 h-4 rounded-full" />
            <Skeleton className="w-full h-4 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
