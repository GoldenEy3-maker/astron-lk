import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Socials } from "./socials";
import { NewsList } from "@/entities/news";
import { useBreadcrumbs } from "@/features/breadcrumbs";
import { Routes } from "@/shared/constants/routes";

export function NewsPage() {
  useBreadcrumbs([{ href: Routes.Home, label: "Главная" }], "Новости");

  return (
    <Section className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">Новости</h1>
      </SectionHeader>
      <SectionContent>
        <Socials />
      </SectionContent>
      <NewsList loadMore limit={10} />
    </Section>
  );
}
