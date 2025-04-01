import { schemas } from "@/shared/api/v1";
import { z } from "zod";
import { SectionBlock } from "./section-block";
import { TextContainer } from "@/shared/ui/text-container";
import { Separator } from "@/shared/ui/separator";
import { cn } from "@/shared/lib/cn";

export type InfoBlockParserProps = {
  content: z.infer<typeof schemas.InfoBlock>[];
} & Omit<React.ComponentProps<"div">, "children" | "content">;

export function InfoBlockParser({
  content,
  className,
  ...props
}: InfoBlockParserProps) {
  return (
    <div className={cn("space-y-8", className)} {...props}>
      {content.map((block, index) => (
        <>
          {index > 0 && <Separator key={index} className="!~my-10/12" />}
          {(() => {
            switch (block.type) {
              case "section":
                return <SectionBlock key={index} {...block} />;
              case "html":
                return <TextContainer key={index} html={block.content} />;
              // case "separator":
              //   return <Separator key={index} className="!~my-10/12" />;
              default:
                return null;
            }
          })()}
        </>
      ))}
    </div>
  );
}
