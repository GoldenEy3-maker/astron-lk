import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/shared/lib/cn";
import { Button } from "./button";
import { ButtonProps } from "./button";

const Popover = PopoverPrimitive.Root;

type PopoverTriggerProps = Omit<
  React.ComponentPropsWithRef<typeof PopoverPrimitive.Trigger>,
  "asChild"
> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

function PopoverTrigger({
  variant = "outline",
  children,
  size = "sm",
  ...props
}: PopoverTriggerProps) {
  return (
    <PopoverPrimitive.Trigger asChild {...props}>
      <Button variant={variant} size={size}>
        {children}
      </Button>
    </PopoverPrimitive.Trigger>
  );
}

type PopoverContentProps = React.ComponentPropsWithRef<
  typeof PopoverPrimitive.Content
>;

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 rounded-main bg-popover p-5 text-popover-foreground shadow-md outline-none ~w-[18rem]/[22rem] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export { Popover, PopoverTrigger, PopoverContent };
