import { BulletinCard } from "./bulletin-card";
import { BulletinCardSkeleton } from "./bulletin-card-skeleton";
import { z } from "zod";
import { schemas } from "@/shared/api/client";

type BulletinsListProps = {
  isLoading: boolean;
  bulletins: z.infer<typeof schemas.Bulletin>[] | undefined;
  limit: number;
};

export function BulletinsList({
  isLoading,
  bulletins,
  limit,
}: BulletinsListProps) {
  return (
    <div className="~mt-4/8 grid grid-cols-1 min-[80rem]:grid-cols-[repeat(auto-fill,minmax(28rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(22rem,1fr))] ~gap-x-7/10 ~gap-y-6/9">
      {!isLoading && bulletins
        ? bulletins?.map((item) => <BulletinCard key={item.id} {...item} />)
        : Array.from({ length: limit }).map((_, index) => (
            <BulletinCardSkeleton key={index} />
          ))}
    </div>
  );
}
