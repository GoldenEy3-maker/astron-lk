import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Socials } from "./socials";
import { News } from "@/entities/news";

export function NewsPage() {
  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Новости</h1>
      </SectionHeader>
      <SectionContent>
        <Socials />
      </SectionContent>
      <News loadMore limit={10} />
    </Section>
  );
}
