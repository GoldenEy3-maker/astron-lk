import { cn } from "../lib/cn";

export function Iframe({
  className,
  ...props
}: React.IframeHTMLAttributes<HTMLIFrameElement>) {
  return (
    <iframe
      className={cn(
        "inline-flex aspect-[7/4] w-full overflow-hidden rounded-main !~mt-4/6",
        className,
      )}
      {...props}
    />
  );
}
