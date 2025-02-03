import { Routes } from "@/shared/constants/routes";
import { Icons } from "@/shared/ui/icons";
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
      {!isLoading ? (
        <>
          <AcademySectionCard
            link={Routes.AcademySales}
            bgImg="/background-image-1.webp"
            title="Процесс продаж"
            Icon={Icons.AcademySales}
          />
          {sections?.map((section) => (
            <AcademySectionCard
              key={section.id}
              link={Routes.AcademySection + "/" + section.id}
              bgImg={section.bgImg}
              title={section.title}
              Icon={section.icon}
            />
          ))}
          <AcademySectionCard
            link={Routes.AcademyProjects}
            bgImg="/background-image-5.webp"
            title="Подборки проектов и отзывы"
            Icon={Icons.AcademyProjects}
          />
          <AcademySectionCard
            link={Routes.AcademyWebinars}
            bgImg="/background-image-6.webp"
            title="Вебинары"
            Icon={Icons.AcademyWebinars}
          />
          <AcademySectionCard
            link={Routes.AcademyBenefits}
            bgImg="/background-image-7.webp"
            title="Преимущества"
            Icon={Icons.AcademyBenefits}
          />
        </>
      ) : (
        Array(4)
          .fill(null)
          .map((_, idx) => <AcademySectionCardSkeleton key={idx} />)
      )}
    </div>
  );
}
