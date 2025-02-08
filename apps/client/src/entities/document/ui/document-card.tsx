import { formatDate } from "@/shared/lib/format-date";
import { formatBytes } from "@/shared/lib/format-bytes";
import { getFileUrlExt } from "@/shared/lib/get-file-url-ext";
import { Icons } from "@/shared/ui/icons";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { DocumentsQueryFnData } from "../api/documents-query";
import { useDocumentsFavorites } from "../lib/use-documents-favorites";
import parse from "html-react-parser";

type DocumentCardProps = {} & DocumentsQueryFnData &
  React.ComponentProps<"article">;

export function DocumentCard({
  id,
  title,
  file,
  category,
  createdAt,
  className,
  ...props
}: DocumentCardProps) {
  const document = { id, title, file, category, createdAt };
  const { isFavorite, toggleFavorite } = useDocumentsFavorites();

  return (
    <article
      className={cn(
        "group/item relative z-10 flex flex-col rounded-main bg-card ~px-4/7 ~py-3/5 before:absolute before:inset-0 before:-z-10 before:bg-[url(/pattern.webp)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-10",
        className,
      )}
      {...props}
    >
      <a
        href={file.url}
        download
        className="absolute inset-0 z-10 rounded-main ring-offset-background transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-main bg-primary/10 px-3 py-1.5 text-sm text-primary">
          {category.label}
        </span>
        <Button
          variant="ghost-primary"
          size="icon"
          className="group/favorite relative z-10"
          onClick={() => toggleFavorite(document)}
        >
          <Icons.Bookmark
            className={cn(
              "transition group-hover/favorite:fill-primary/10 group-hover/favorite:text-primary",
              {
                "!fill-primary !text-primary": isFavorite(id),
              },
            )}
          />
        </Button>
      </div>
      <h4 className="mt-2 text-h4 transition-colors group-hover/item:text-primary">
        {parse(title)}
      </h4>
      <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-sm">
        <time dateTime={createdAt} className="text-muted">
          {formatDate(new Date(createdAt))}
        </time>
        <span className="flex items-center gap-1 text-muted transition-colors hover:text-primary">
          <Icons.ArrowDown />
          <span className="ml-1.5">{formatBytes(file.size)}</span>
          <span>{getFileUrlExt(file.url)}</span>
        </span>
      </div>
    </article>
  );
}
