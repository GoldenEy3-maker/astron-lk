import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { FactoryAbout } from "@/widgets/factory";

export function FactoryPage() {
  return (
    <Section space="md" className="col-span-full grid grid-cols-subgrid">
      <SectionHeader className="col-span-full">
        <h1 className="text-h1 text-heading-h2">О заводе Astron</h1>
      </SectionHeader>
      <SectionContent className="col-span-full grid grid-cols-subgrid">
        <FactoryAbout extended />
      </SectionContent>
    </Section>
  );
}
