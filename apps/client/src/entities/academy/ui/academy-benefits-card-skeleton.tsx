import { Skeleton } from "@/shared/ui/skeleton";

export function AcademyBenefitsCardSkeleton() {
  return (
    <div className="flex flex-col gap-y-5 rounded-main bg-primary/10 py-5 ~gap-x-4/8 ~pr-4/7 ~pl-4/9 sm:flex-row">
      <div className="order-2 flex w-full flex-col gap-3 sm:order-1">
        <Skeleton className="h-7 w-2/3 rounded-full" />
        <div className="mt-3 space-y-2">
          <Skeleton className="h-3 w-full rounded-full" />
          <Skeleton className="h-3 w-full rounded-full" />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Skeleton className="h-8 w-1/4 rounded-full" />
          <Skeleton className="h-8 w-1/4 rounded-full" />
          <Skeleton className="h-8 w-1/4 rounded-full" />
        </div>
        <div className="mt-auto pt-4">
          <Skeleton className="h-4 w-1/3 rounded-full" />
        </div>
      </div>
      <Skeleton className="order-1 h-[15rem] w-full shrink-0 !rounded-main sm:order-2 sm:~w-[15rem]/[26.25rem]" />
    </div>
  );
}
