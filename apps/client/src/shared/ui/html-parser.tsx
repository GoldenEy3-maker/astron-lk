import parse, {
  attributesToProps,
  DOMNode,
  domToReact,
  Element,
} from "html-react-parser";
import { cn } from "../lib/cn";

type HTMLParserProps = { content: string } & React.ComponentProps<"div">;

export function HTMLParser({ content, className, ...props }: HTMLParserProps) {
  return (
    <div className={cn("html-parser", className)} {...props}>
      {parse(content, {
        replace(domNode) {
          if (
            domNode instanceof Element &&
            domNode.attribs &&
            domNode.name === "video"
          ) {
            const props = attributesToProps(domNode.attribs);
            return (
              <video data-custom-player {...props}>
                {domToReact(domNode.children as DOMNode[])}
              </video>
            );
          }
        },
      })}
    </div>
  );
}
