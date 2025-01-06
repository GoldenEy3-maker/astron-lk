import { useQuery } from "@tanstack/react-query";
import { getNewsByIdQueryOptions } from "../api/news-detail-query";
import { useParams } from "react-router-dom";
import { dateFormat } from "@/shared/lib/date-format";
import { useBreadcrumbs } from "@/features/breadcrumbs";
import { Routes } from "@/shared/constants/routes";

export function NewsDetailPage() {
  const params = useParams<{ newsId: string }>();
  const { data, isLoading } = useQuery(getNewsByIdQueryOptions(params.newsId!));

  useBreadcrumbs(
    [
      { href: Routes.Home, label: "Главная" },
      { href: Routes.News, label: "Новости" },
    ],
    data?.title
  );

  if (!data || isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-h1 text-heading-h2">{data.title}</h1>
      <time dateTime={data.createdAt} className="text-muted text-sm mt-3">
        {dateFormat(new Date(data.createdAt), "dd MMMM yyyy")}
      </time>
    </div>
  );
}
