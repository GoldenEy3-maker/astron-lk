import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAcademyProjectByIdQueryOptions } from "../api/academy-query";
import {
  InfoBlockParser,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import parse from "html-react-parser";

export function AcademyProjectsDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const { data, isLoading } = useQuery(
    getAcademyProjectByIdQueryOptions(projectId!)
  );

  useBreadcrumbs("projectId", data?.title);

  return (
    <Section className="col-span-full m-md:col-[span_15]">
      <SectionHeader className="items-start flex-col gap-5">
        {!isLoading && data ? (
          <>
            <h1 className="text-h1 text-heading-h2">{parse(data?.title)}</h1>
            <p className="~text-base/lg">{parse(data?.description)}</p>
          </>
        ) : null}
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
