import { useQuery } from "@tanstack/react-query";
import { getAcademyProjectsQueryOptions } from "../api/academy-query";
import { AcademyProjectCard } from "./academy-project-card";
import { AcademyProjectsCardSkeleton } from "./academy-projects-card-skeleton";

export function AcademyProjectsList() {
  const { data, isLoading } = useQuery(getAcademyProjectsQueryOptions());
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] m-md:grid-cols-[repeat(auto-fill,minmax(22rem,1fr))] ~gap-x-8/14 ~gap-y-6/10">
      {!isLoading && data
        ? data?.map((project) => (
            <AcademyProjectCard key={project.id} {...project} />
          ))
        : Array(4)
            .fill(null)
            .map((_, index) => <AcademyProjectsCardSkeleton key={index} />)}
    </div>
  );
}
