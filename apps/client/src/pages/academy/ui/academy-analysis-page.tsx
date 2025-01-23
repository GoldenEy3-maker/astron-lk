import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { getAcademyAnalysisQueryOptions } from "../api/academy-query";
import { useQuery } from "@tanstack/react-query";
import {
  InfoBlockParser,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";

export function AcademyAnalysisPage() {
  const { data, isLoading } = useQuery(getAcademyAnalysisQueryOptions());

  return (
    <Section className="col-span-full m-md:col-[span_15]">
      <SectionHeader className="flex-col gap-5 items-start">
        <h1 className="text-h1 text-heading-h2">Конъюнктурный анализ</h1>
        <p className="~text-base/lg">
          В Astron мы в качестве Технического Задания используем&nbsp;так
          называемую карту проекта. Применяется для обработки входящих запросов.
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
