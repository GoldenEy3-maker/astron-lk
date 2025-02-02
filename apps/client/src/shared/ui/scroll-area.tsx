import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/shared/lib/cn";

type ScrollAreaProps = React.ComponentPropsWithRef<
  typeof ScrollAreaPrimitive.Root
>;

function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
  return (
    <ScrollAreaPrimitive.Root
      className={cn("relative overflow-hidden", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

type ScrollBarProps = React.ComponentPropsWithRef<
  typeof ScrollAreaPrimitive.ScrollAreaScrollbar
>;

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollBarProps) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      orientation={orientation}
      className={cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" &&
          "h-full w-2 border-l border-l-transparent p-[1px] transition-all duration-200 hover:w-3",
        orientation === "horizontal" &&
          "h-2 flex-col border-t border-t-transparent p-[1px] transition-all duration-200 hover:h-3",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
