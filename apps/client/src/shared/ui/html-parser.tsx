import parse, { attributesToProps, Element } from "html-react-parser";
import { cn } from "../lib/cn";
import { VideoDialog } from "./video-dialog";

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
            const props = attributesToProps(
              domNode.attribs
            ) as React.VideoHTMLAttributes<HTMLVideoElement>;
            return (
              // <video {...props}>
              //   {domToReact(domNode.children as DOMNode[])}
              // </video>
              <VideoDialog
                thumbnailSrc={props.poster ?? ""}
                videoSrc={props.src ?? ""}
                thumbnailAlt={props.title}
              />
            );
          }
        },
      })}
    </div>
  );
}
