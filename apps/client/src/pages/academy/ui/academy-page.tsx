import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { AcademySectionList } from "@/entities/academy";

export function AcademyPage() {
  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Академия Astron</h1>
      </SectionHeader>
      <SectionContent>
        <AcademySectionList />
      </SectionContent>
    </Section>
  );
}
