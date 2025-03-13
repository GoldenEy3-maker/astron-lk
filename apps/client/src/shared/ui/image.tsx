import { cn } from "../lib/cn";

export function Image({
  className,
  ...props
}: React.ComponentPropsWithRef<"img">) {
  return (
    <div
      className={cn(
        "relative flex aspect-[7/4] items-center justify-center overflow-hidden rounded-main bg-card-accent",
        className,
      )}
    >
      <img className="size-full object-cover" {...props} />
    </div>
  );
}
