import { Skeleton } from "@/shared/ui/skeleton";

export function FactoryTeamCardSkeleton() {
  return (
    <div>
      <Skeleton className="h-80 w-full !rounded-main" />
      <Skeleton className="mt-5 h-3 w-2/5 !rounded-main" />
      <Skeleton className="mt-2 h-5 w-9/12 !rounded-main" />
      <Skeleton className="mt-3 h-3 w-1/2 !rounded-main" />
      <Skeleton className="mt-2 h-3 w-3/5 !rounded-main" />
    </div>
  );
}
