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
      className="bg-card rounded-main ~py-4/5 ~px-6/7 relative flex flex-col sm:flex-row transition gap-4 group items-start"
      {...props}>
      <Link
        to={Routes.News + "/" + id}
        className="absolute inset-0 z-10 ring-offset-background rounded-main focus:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition"
      />
      <div className="flex-1">
        <time dateTime={createdAt} className="text-muted text-sm">
          {formatDate(new Date(createdAt))}
        </time>
        <h4 className="text-h4 text-primary ~mt-2/3 group-hover:text-primary-accent">
          {parse(title)}
        </h4>
        <p className="text-muted mt-2 line-clamp-3">{parse(description)}</p>
      </div>
      <div className="relative rounded-main shrink-0 overflow-hidden w-[9.375rem] h-[7.5rem]">
        <img
          src={img.src}
          alt={img.alt}
          className="object-cover absolute inset-0 w-full h-full"
        />
      </div>
    </article>
  );
}
