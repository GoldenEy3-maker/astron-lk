import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { getAcademySectionByIdQueryOptions } from "../api/academy-query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import parse from "html-react-parser";
import {
  InfoBlockParser,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";

export function AcademySectionDetailPage() {
  const params = useParams<{ sectionId: string }>();
  const { data, isLoading } = useQuery(
    getAcademySectionByIdQueryOptions(params.sectionId!),
  );

  useBreadcrumbs("sectionId", data?.title);

  return (
    <Section className="col-span-full m-md:col-[span_15]">
      {!isLoading && data ? (
        <SectionHeader className="flex-col items-start gap-5">
          <h1 className="text-h1 text-heading-h2">{parse(data.title)}</h1>
          {data.description ? (
            <p className="~text-base/lg">{parse(data.description)}</p>
          ) : null}
        </SectionHeader>
      ) : null}
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
