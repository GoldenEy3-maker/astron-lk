import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useQuery } from "@tanstack/react-query";
import {
  InfoBlockParser,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";
import { getOnlineTestsQueryOptions } from "../api/online-tests-query";

export function OnlineTestsPage() {
  const { data, isLoading } = useQuery(getOnlineTestsQueryOptions());

  return (
    <Section className="col-span-full m-md:col-[span_15]">
      {/* {!isLoading && data ? (
        <SectionHeader className="flex-col items-start gap-5">
          <h1 className="text-h1 text-heading-h2">{parse(data.title)}</h1>
          {data.description ? (
            <p className="~text-base/lg">{parse(data.description)}</p>
          ) : null}
        </SectionHeader>
      ) : null} */}
      <SectionHeader className="flex-col items-start gap-5">
        <h1 className="text-h1 text-heading-h2">Онлайн-тесты</h1>
      </SectionHeader>
      <SectionContent>
        {!isLoading && data ? (
          <InfoBlockParser content={data} />
        ) : (
          <InfoBlockSkeleton />
        )}
      </SectionContent>
    </Section>
  );
}
