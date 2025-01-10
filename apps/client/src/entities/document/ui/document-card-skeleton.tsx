import { Skeleton } from "@/shared/ui/skeleton";

export function DocumentCardSkeleton() {
  return (
    <div className="bg-card rounded-main relative z-10 before:bg-[url(/pattern.png)] before:bg-no-repeat before:bg-cover flex flex-col before:bg-center before:absolute before:inset-0 before:opacity-[0.06] before:-z-10 py-5 px-7">
      <div className="flex items-center justify-between gap-4">
        <Skeleton className="w-36 h-8 rounded-full" />
      </div>
      <Skeleton className="w-3/5 h-6 rounded-full mt-3" />
      <div className="flex text-sm mt-auto items-center justify-between gap-4 pt-5">
        <Skeleton className="w-24 rounded-full h-5" />
        <Skeleton className="w-24 rounded-full h-5" />
      </div>
    </div>
  );
}
