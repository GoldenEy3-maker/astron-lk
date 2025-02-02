import { schemas } from "@/shared/api/client";
import { Routes } from "@/shared/constants/routes";
import { formatDate } from "@/shared/lib/format-date";
import { Link } from "react-router-dom";
import { z } from "zod";
import parse from "html-react-parser";
type NewsCardProps = Omit<z.infer<typeof schemas.News>, "content"> &
  React.ComponentProps<"article">;

export function NewsCard({
  id,
  createdAt,
  title,
  description,
  img,
  ...props
}: NewsCardProps) {
  return (
    <article
      className="group relative flex flex-col items-start gap-4 rounded-main bg-card transition ~px-6/7 ~py-4/5 sm:flex-row"
      {...props}
    >
      <Link
        to={Routes.News + "/" + id}
        className="absolute inset-0 z-10 rounded-main ring-offset-background transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      <div className="flex-1">
        <time dateTime={createdAt} className="text-sm text-muted">
          {formatDate(new Date(createdAt))}
        </time>
        <h4 className="text-h4 text-primary ~mt-2/3 group-hover:text-primary-accent">
          {parse(title)}
        </h4>
        <p className="mt-2 line-clamp-3 text-muted">{parse(description)}</p>
      </div>
      <div className="relative h-[7.5rem] w-[9.375rem] shrink-0 overflow-hidden rounded-main">
        <img
          src={img.src}
          alt={img.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </article>
  );
}
