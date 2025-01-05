import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Socials } from "./socials";
import { NewsList } from "@/entities/news";

export function NewsPage() {
  return (
    <div>
      <Section>
        <SectionHeader>
          <h1 className="text-h1 text-heading-h2">Новости</h1>
        </SectionHeader>
        <SectionContent>
          <Socials />
        </SectionContent>
        <NewsList loadMore limit={10} />
      </Section>
    </div>
  );
}
