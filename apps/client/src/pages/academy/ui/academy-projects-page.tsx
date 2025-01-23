import { AcademyProjectsList } from "@/entities/academy";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";

export function AcademyProjectsPage() {
  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Подборки проектов и отзывы</h1>
      </SectionHeader>
      <SectionContent>
        <AcademyProjectsList />
      </SectionContent>
    </Section>
  );
}
