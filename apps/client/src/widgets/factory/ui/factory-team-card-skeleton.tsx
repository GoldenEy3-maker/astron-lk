import { Skeleton } from "@/shared/ui/skeleton";

export function FactoryTeamCardSkeleton() {
  return (
    <div>
      <Skeleton className="w-full h-80 !rounded-main" />
      <Skeleton className="w-2/5 h-3 mt-5 !rounded-main" />
      <Skeleton className="w-9/12 h-5 mt-2 !rounded-main" />
      <Skeleton className="w-1/2 h-3 mt-3 !rounded-main" />
      <Skeleton className="w-3/5 h-3 mt-2 !rounded-main" />
    </div>
  );
}
