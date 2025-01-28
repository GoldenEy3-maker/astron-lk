import { cn } from "../lib/cn";

export function Image({
  className,
  ...props
}: React.ComponentPropsWithRef<"img">) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-main bg-card-accent flex items-center justify-center ~h-[14rem]/[26.25rem]",
        className
      )}>
      <img {...props} />
    </div>
  );
}
