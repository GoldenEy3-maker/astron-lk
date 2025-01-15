import { BulletinCard } from "./bulletin-card";
import { BulletinCardSkeleton } from "./bulletin-card-skeleton";
import { z } from "zod";
import { schemas } from "@/shared/api/client";
import { cn } from "@/shared/lib/cn";

type BulletinsListProps = {
  isLoading: boolean;
  bulletins: z.infer<typeof schemas.Bulletin>[] | undefined;
  limit: number;
} & React.ComponentProps<"div">;

export function BulletinsList({
  isLoading,
  bulletins,
  limit,
  className,
  ...props
}: BulletinsListProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 min-[80rem]:grid-cols-[repeat(auto-fill,minmax(28rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(22rem,1fr))] ~gap-x-7/10 ~gap-y-6/9",
        className
      )}
      {...props}>
      {!isLoading && bulletins
        ? bulletins?.map((item) => <BulletinCard key={item.id} {...item} />)
        : Array.from({ length: limit }).map((_, index) => (
            <BulletinCardSkeleton key={index} />
          ))}
    </div>
  );
}
