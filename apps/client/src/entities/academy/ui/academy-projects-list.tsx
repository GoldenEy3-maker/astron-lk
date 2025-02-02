import { AcademyProjectCard } from "./academy-project-card";
import { AcademyProjectsCardSkeleton } from "./academy-projects-card-skeleton";
import { z } from "zod";
import { schemas } from "@/shared/api/v1";

type AcademyProjectsListProps = {
  data:
    | (
        | z.infer<typeof schemas.AcademyProjectInList>
        | z.infer<typeof schemas.AcademyWebinarInList>
      )[]
    | undefined;
  isLoading: boolean;
  asWebinars?: boolean;
};

export function AcademyProjectsList({
  data,
  isLoading,
  asWebinars,
}: AcademyProjectsListProps) {
  return (
    <div className="grid grid-cols-1 ~gap-x-8/14 ~gap-y-6/10 sm:grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] m-md:grid-cols-[repeat(auto-fill,minmax(22rem,1fr))]">
      {!isLoading && data
        ? data?.map((project) => (
            <AcademyProjectCard
              asWebinars={asWebinars}
              key={project.id}
              {...project}
            />
          ))
        : Array(4)
            .fill(null)
            .map((_, index) => <AcademyProjectsCardSkeleton key={index} />)}
    </div>
  );
}
