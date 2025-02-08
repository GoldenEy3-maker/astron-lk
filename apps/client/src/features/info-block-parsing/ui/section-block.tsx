import { DocumentsList } from "@/entities/document";
import { schemas } from "@/shared/api/v1";
import { TextContainer } from "@/shared/ui/text-container";
import { z } from "zod";
import { MediaBlock } from "./media-block";
import { cn } from "@/shared/lib/cn";

type SectionBlockProps = {} & Omit<
  z.infer<typeof schemas.SectionBlock>,
  "type"
>;

export function SectionBlock({
  text,
  title,
  documents,
  media,
}: SectionBlockProps) {
  return (
    <section>
      <h2 className="text-h2 text-heading-h3 ~mb-4/6">{title}</h2>
      {text ? <TextContainer html={text} /> : null}
      {media ? <MediaBlock className="~mt-4/6" media={media} /> : null}
      {documents ? (
        <DocumentsList
          className={cn({
            "~mt-7/9": media || text,
          })}
          skeletons={4}
          documents={documents}
          isLoading={false}
        />
      ) : null}
    </section>
  );
}
