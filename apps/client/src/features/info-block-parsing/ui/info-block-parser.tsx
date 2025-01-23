import { schemas } from "@/shared/api/v1";
import { z } from "zod";
import { SectionBlock } from "./section-block";
import { HTMLParser } from "@/shared/ui/html-parser";
import { Separator } from "@/shared/ui/separator";

type InfoBlockParserProps = {
  content: z.infer<typeof schemas.InfoBlock>[];
};

export function InfoBlockParser({ content }: InfoBlockParserProps) {
  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        switch (block.type) {
          case "section":
            return <SectionBlock key={index} {...block} />;
          case "html":
            return <HTMLParser key={index} html={block.content} />;
          case "separator":
            return <Separator key={index} className="!~my-10/12" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
