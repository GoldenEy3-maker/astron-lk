import { schemas } from "@/shared/api/client";
import { dateFormat } from "@/shared/lib/date-format";
import { formatBytes } from "@/shared/lib/format-bytes";
import { getFileUrlExt } from "@/shared/lib/get-file-url-ext";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";
import { Link } from "react-router-dom";
import { z } from "zod";

type BulletinCardProps = {} & z.infer<typeof schemas.Bulletin>;

export function BulletinCard({
  id,
  title,
  file,
  category,
  createdAt,
}: BulletinCardProps) {
  return (
    <article
      data-id={id}
      className="bg-card rounded-main relative z-10 group/item before:bg-[url(/pattern.png)] before:bg-no-repeat before:bg-cover flex flex-col before:bg-center before:absolute before:inset-0 before:opacity-10 before:-z-10 ~py-3/5 ~px-4/7">
      <Link
        to={file.url}
        target="_blank"
        className="absolute inset-0 z-10 ring-offset-background rounded-main focus:outline-none focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 transition"
      />
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm py-1.5 px-3 rounded-main text-primary bg-primary/10">
          {category}
        </span>
        <Button
          variant="ghost-primary"
          size="icon"
          className="relative z-10 group/favorite">
          <Icons.Bookmark className="group-hover/favorite:text-primary group-hover/favorite:fill-primary/10" />
        </Button>
      </div>
      <h4 className="text-h4 mt-2 group-hover/item:text-primary transition-colors">
        {title}
      </h4>
      <div className="flex text-sm mt-auto items-center justify-between gap-4 pt-5">
        <time dateTime={createdAt} className="text-muted">
          {dateFormat(new Date(createdAt))}
        </time>
        <span className="flex text-muted hover:text-primary transition-colors items-center gap-1">
          <Icons.ArrowDown />
          <span className="ml-1.5">{formatBytes(file.size)}</span>
          <span>{getFileUrlExt(file.url)}</span>
        </span>
      </div>
    </article>
  );
}
