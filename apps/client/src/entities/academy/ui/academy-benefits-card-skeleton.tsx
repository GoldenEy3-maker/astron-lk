import { Skeleton } from "@/shared/ui/skeleton";

export function AcademyBenefitsCardSkeleton() {
  return (
    <div className="flex flex-col gap-y-5 bg-primary/10 sm:flex-row py-5 ~pl-4/9 ~gap-x-4/8 ~pr-4/7 rounded-main">
      <div className="flex order-2 sm:order-1 flex-col gap-3 w-full">
        <Skeleton className="w-2/3 h-7 rounded-full" />
        <div className="space-y-2 mt-3">
          <Skeleton className="w-full h-3 rounded-full" />
          <Skeleton className="w-full h-3 rounded-full" />
        </div>
        <div className="flex items-center flex-wrap gap-2 mt-3">
          <Skeleton className="w-1/4 h-8 rounded-full" />
          <Skeleton className="w-1/4 h-8 rounded-full" />
          <Skeleton className="w-1/4 h-8 rounded-full" />
        </div>
        <div className="mt-auto pt-4">
          <Skeleton className="w-1/3 h-4 rounded-full" />
        </div>
      </div>
      <Skeleton className="order-1 sm:order-2 w-full sm:~w-[15rem]/[26.25rem] shrink-0 h-[15rem] !rounded-main" />
    </div>
  );
}
