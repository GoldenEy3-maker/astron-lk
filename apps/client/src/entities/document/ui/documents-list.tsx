import { DocumentCard } from "./document-card";
import { DocumentCardSkeleton } from "./document-card-skeleton";
import { DocumentsQueryFnData } from "../api/documents-query";

type DocumentsListProps = {
  isLoading: boolean;
  documents: DocumentsQueryFnData[] | undefined;
  skeletons: number;
};

export function DocumentsList({
  isLoading,
  documents,
  skeletons,
}: DocumentsListProps) {
  return (
    <div className="grid grid-cols-1 min-[80rem]:grid-cols-[repeat(auto-fill,minmax(28rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(22rem,1fr))] ~gap-x-7/10 ~gap-y-6/9">
      {!isLoading && documents
        ? documents?.map((item) => <DocumentCard key={item.id} {...item} />)
        : Array.from({ length: skeletons }).map((_, index) => (
            <DocumentCardSkeleton key={index} />
          ))}
    </div>
  );
}
