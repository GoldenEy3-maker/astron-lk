import { useQuery } from "@tanstack/react-query";
import { getNewsByIdQueryOptions } from "../api/news-query";
import { useParams } from "react-router-dom";
import { formatDate } from "@/shared/lib/format-date";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import {
  InfoBlockParser,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";
import { Image } from "@/shared/ui/image";
import parse from "html-react-parser";

export function NewsDetailPage() {
  const params = useParams<{ newsId: string }>();
  const { data, isLoading } = useQuery(getNewsByIdQueryOptions(params.newsId!));

  useBreadcrumbs("newsId", data?.title);

  return (
    <Section space="md" className="col-span-full m-md:col-[span_15]">
      {!isLoading && data ? (
        <SectionHeader className="flex-col items-start gap-3">
          <h1 className="text-h1 text-heading-h2">{parse(data.title)}</h1>
          <time dateTime={data.createdAt} className="block text-sm text-muted">
            {formatDate(new Date(data.createdAt))}
          </time>
          <Image src={data.img.src} alt={data.img.alt} className="~mt-2/5" />
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
