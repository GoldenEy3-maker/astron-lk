import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { InfoBlockParser, InfoBlockSkeleton } from "@/widgets/info-block";
import { getAcademyConversationsQueryOptions } from "../api/academy-query";
import { useQuery } from "@tanstack/react-query";

export function AcademyConversationsPage() {
  const { data, isLoading } = useQuery(getAcademyConversationsQueryOptions());

  return (
    <Section className="col-span-full m-md:col-[span_15]">
      <SectionHeader className="flex-col gap-5 items-start">
        <h1 className="text-h1 text-heading-h2">Подготовка к переговорам</h1>
        <p className="~text-base/lg">
          В Astron мы в качестве Технического Задания используем&nbsp;так
          называемую карту проекта. Применяется для обработки входящих запросов.{" "}
        </p>
      </SectionHeader>
      <SectionContent>
        {!isLoading && data ? (
          <InfoBlockParser content={data.content} />
        ) : (
          <InfoBlockSkeleton />
        )}
      </SectionContent>
    </Section>
  );
}
