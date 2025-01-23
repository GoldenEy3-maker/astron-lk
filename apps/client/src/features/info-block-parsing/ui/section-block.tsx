import { DocumentsList } from "@/entities/document";
import { schemas } from "@/shared/api/v1";
import { HTMLParser } from "@/shared/ui/html-parser";
import { z } from "zod";
import { MediaBlock } from "./media-block";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/lib/cn";

type SectionBlockProps = {} & Omit<
  z.infer<typeof schemas.SectionBlock>,
  "type"
>;

type SectionTitleProps = {
  text: z.infer<typeof schemas.SectionBlock>["title"]["text"];
  type: z.infer<typeof schemas.SectionBlock>["title"]["type"];
};

const sectionTitleVariants = cva("", {
  variants: {
    type: {
      h1: "text-h1 mb-4 text-heading-h2",
      h2: "text-h2 ~mb-4/6 text-heading-h3",
      h3: "text-h3 ~mb-5/7",
    },
  },
  defaultVariants: {
    type: "h1",
  },
});

function SectionTitle(props: SectionTitleProps) {
  return (
    <props.type className={sectionTitleVariants({ type: props.type })}>
      {props.text}
    </props.type>
  );
}

export function SectionBlock({
  text,
  title,
  documents,
  media,
}: SectionBlockProps) {
  return (
    <section>
      <SectionTitle type={title.type} text={title.text} />
      {text && <HTMLParser html={text} />}
      {media && <MediaBlock className="~mt-4/6" media={media} />}
      {documents && (
        <DocumentsList
          className={cn({
            "~mt-7/9": media || text,
          })}
          skeletons={4}
          documents={documents}
          isLoading={false}
        />
      )}
    </section>
  );
}
