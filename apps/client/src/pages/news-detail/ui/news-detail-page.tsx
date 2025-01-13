import { useQuery } from "@tanstack/react-query";
import { getNewsByIdQueryOptions } from "../api/news-detail-query";
import { useParams } from "react-router-dom";
import { dateFormat } from "@/shared/lib/date-format";
import { useBreadcrumbs } from "@/widgets/breadcrumbs";
import { HTMLParser } from "@/shared/ui/html-parser";

export function NewsDetailPage() {
  const params = useParams<{ newsId: string }>();
  const { data, isLoading } = useQuery(getNewsByIdQueryOptions(params.newsId!));

  useBreadcrumbs("newsId", data?.title);

  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <div className="md:col-[span_15] col-span-full">
      <h1 className="text-h1 text-heading-h2">{data.title}</h1>
      <time dateTime={data.createdAt} className="block text-muted text-sm mt-3">
        {dateFormat(new Date(data.createdAt))}
      </time>
      <HTMLParser className="mt-8" content={data.content} />
    </div>
  );
}
