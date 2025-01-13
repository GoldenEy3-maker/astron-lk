import { DocumentCard } from "./document-card";
import { DocumentCardSkeleton } from "./document-card-skeleton";
import { z } from "zod";
import { schemas } from "@/shared/api/v1";

type DocumentsListProps = {
  isLoading: boolean;
  documents: z.infer<typeof schemas.Document>[] | undefined;
  limit: number;
};

export function DocumentsList({
  isLoading,
  documents,
  limit,
}: DocumentsListProps) {
  return (
    <div className="~mt-4/8 grid grid-cols-1 min-[80rem]:grid-cols-[repeat(auto-fill,minmax(28rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(22rem,1fr))] ~gap-x-7/10 ~gap-y-6/9">
      {!isLoading && documents
        ? documents?.map((item) => <DocumentCard key={item.id} {...item} />)
        : Array.from({ length: limit }).map((_, index) => (
            <DocumentCardSkeleton key={index} />
          ))}
    </div>
  );
}
