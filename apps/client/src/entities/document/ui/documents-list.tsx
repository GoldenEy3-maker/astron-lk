import { DocumentCard } from "./document-card";
import { DocumentCardSkeleton } from "./document-card-skeleton";
import { DocumentsQueryFnData } from "../api/documents-query";
import { cn } from "@/shared/lib/cn";

type DocumentsListProps = {
  isLoading: boolean;
  documents: DocumentsQueryFnData[] | undefined;
  skeletons?: number;
  onRemoveFavoritesExceedMinimum?: () => void;
  currentPage?: number;
  onIntersectingUnread?: (id: string) => void;
} & React.ComponentProps<"div">;

export function DocumentsList({
  isLoading,
  documents,
  skeletons,
  className,
  onRemoveFavoritesExceedMinimum,
  currentPage,
  onIntersectingUnread,
  ...props
}: DocumentsListProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 ~gap-x-7/10 ~gap-y-6/9 sm:grid-cols-[repeat(auto-fill,minmax(19rem,1fr))] m-md:grid-cols-[repeat(auto-fill,minmax(22rem,1fr))]",
        className,
      )}
      {...props}
    >
      {!isLoading && documents
        ? documents?.map((item) => (
            <DocumentCard
              key={item.id}
              onRemoveFavoritesExceedMinimum={onRemoveFavoritesExceedMinimum}
              currentPage={currentPage}
              onIntersectingUnread={onIntersectingUnread}
              {...item}
            />
          ))
        : skeletons
          ? Array.from({ length: skeletons }).map((_, index) => (
              <DocumentCardSkeleton key={index} />
            ))
          : null}
    </div>
  );
}
