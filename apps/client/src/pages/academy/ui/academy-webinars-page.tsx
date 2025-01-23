import { AcademyProjectsList } from "@/entities/academy";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useQuery } from "@tanstack/react-query";
import { getAcademyWebinarsQueryOptions } from "../api/academy-query";

export function AcademyWebinarsPage() {
  const { data, isLoading } = useQuery(getAcademyWebinarsQueryOptions());

  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Вебинары</h1>
      </SectionHeader>
      <SectionContent>
        <AcademyProjectsList asWebinars data={data} isLoading={isLoading} />
      </SectionContent>
    </Section>
  );
}
