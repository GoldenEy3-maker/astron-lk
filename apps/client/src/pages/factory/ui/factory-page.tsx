import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import {
  FactoryAbout,
  FactoryProduction,
  FactoryTeam,
} from "@/widgets/factory";
import { FactoryExtra } from "@/widgets/factory/ui/factory-extra";

export function FactoryPage() {
  return (
    <div className="main-space col-span-full grid grid-cols-subgrid">
      <Section space="md" className="col-span-full grid grid-cols-subgrid">
        <SectionHeader className="col-span-full">
          <h1 className="text-h1 text-heading-h2">О заводе Astron</h1>
        </SectionHeader>
        <SectionContent className="col-span-full grid grid-cols-subgrid">
          <FactoryAbout extended />
        </SectionContent>
      </Section>
      <FactoryProduction className="col-span-full" />
      <FactoryTeam className="col-span-full" />
      <FactoryExtra className="col-span-full" />
    </div>
  );
}
