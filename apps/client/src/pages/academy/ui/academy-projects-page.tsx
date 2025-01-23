import { AcademyProjectsList } from "@/entities/academy";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useQuery } from "@tanstack/react-query";
import { getAcademyProjectsQueryOptions } from "../api/academy-query";

export function AcademyProjectsPage() {
  const { data, isLoading } = useQuery(getAcademyProjectsQueryOptions());

  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Подборки проектов и отзывы</h1>
      </SectionHeader>
      <SectionContent>
        <AcademyProjectsList data={data} isLoading={isLoading} />
      </SectionContent>
    </Section>
  );
}
