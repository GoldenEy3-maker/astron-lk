import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/shared/lib/cn";

type SeparatorProps = {} & React.ComponentPropsWithRef<
  typeof SeparatorPrimitive.Root
>;

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      className={cn(
        "shrink-0 bg-border/40",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  );
}

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
