import { Routes } from "@/shared/constants/routes";
import { AcademySectionCard } from "./academy-section-card";
import { useQuery } from "@tanstack/react-query";
import { getAcademySectionsQueryOptions } from "../api/academy-query";
import { AcademySectionCardSkeleton } from "./academy-section-card-sekeleton";

export function AcademySectionList() {
  const { data: sections, isLoading } = useQuery(
    getAcademySectionsQueryOptions(),
  );

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] ~gap-x-6/14 ~gap-y-4/10">
      {!isLoading
        ? sections?.map((section) => (
            <AcademySectionCard
              key={section.id}
              link={section.url || Routes.AcademySection + "/" + section.id}
              bgImg={section.bgImg}
              title={section.title}
              Icon={section.icon}
            />
          ))
        : Array(4)
            .fill(null)
            .map((_, idx) => <AcademySectionCardSkeleton key={idx} />)}
    </div>
  );
}
