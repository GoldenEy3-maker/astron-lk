import parse, {
  attributesToProps,
  DOMNode,
  domToReact,
  Element,
} from "html-react-parser";
import { cn } from "../lib/cn";
import { VideoDialog } from "./video-dialog";
import { Image } from "./image";
import { Button } from "./button";

type TextContainerProps = { html: string } & Omit<
  React.ComponentProps<"div">,
  "children"
>;

export function TextContainer({
  html,
  className,
  ...props
}: TextContainerProps) {
  return (
    <div className={cn("text-container", className)} {...props}>
      {parse(html, {
        replace(domNode) {
          if (
            domNode instanceof Element &&
            domNode.attribs &&
            domNode.name === "a"
          ) {
            const props = attributesToProps(
              domNode.attribs,
            ) as React.AnchorHTMLAttributes<HTMLAnchorElement>;
            return (
              <Button
                asChild
                variant="link"
                size="hug"
                className="inline whitespace-normal font-normal underline underline-offset-4"
              >
                <a {...props}>{domToReact(domNode.children as DOMNode[])}</a>
              </Button>
            );
          }

          if (
            domNode instanceof Element &&
            domNode.attribs &&
            domNode.name === "img"
          ) {
            const props = attributesToProps(
              domNode.attribs,
            ) as React.ImgHTMLAttributes<HTMLImageElement>;
            return <Image className="!~mt-6/8" {...props} />;
          }

          if (
            domNode instanceof Element &&
            domNode.attribs &&
            domNode.name === "video"
          ) {
            const props = attributesToProps(
              domNode.attribs,
            ) as React.VideoHTMLAttributes<HTMLVideoElement>;
            return (
              <VideoDialog
                thumbnailSrc={props.poster ?? ""}
                videoSrc={props.src ?? ""}
                thumbnailAlt={props.title}
                triggerClassName="!~mt-4/6"
              />
            );
          }

          if (
            domNode instanceof Element &&
            domNode.attribs &&
            domNode.name === "iframe"
          ) {
            const { className, ...props } = attributesToProps(
              domNode.attribs,
            ) as React.IframeHTMLAttributes<HTMLIFrameElement>;

            return (
              <iframe
                className={cn(
                  "inline-flex aspect-video w-full overflow-hidden rounded-main !~mt-4/6",
                  className,
                )}
                {...props}
              />
            );
          }
        },
      })}
    </div>
  );
}
