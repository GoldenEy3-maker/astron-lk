import { useQuery } from "@tanstack/react-query";
import { getPartnersQueryOptions } from "../api/partner-query";
import { PartnersSortKeyMap } from "../constants/partners-sort-maps";
import { PartnerCardInList } from "./partner-card-in-list";
import { PartnerCardInListSkeleton } from "./partner-card-in-list-skeleton";

type PartnersListProps = {
  sort?: PartnersSortKeyMap;
};

export function PartnersList({ sort }: PartnersListProps) {
  const { data, isLoading } = useQuery(getPartnersQueryOptions(sort));

  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-8 md:grid-cols-[auto_1fr_1fr] m-md:grid-cols-[auto_1fr] m-xl:grid-cols-[auto_1fr_1fr]">
      {!isLoading && data
        ? data.map((partner) => (
            <PartnerCardInList key={partner.id} {...partner} />
          ))
        : Array(4)
            .fill(null)
            .map((_, index) => <PartnerCardInListSkeleton key={index} />)}
    </div>
  );
}
