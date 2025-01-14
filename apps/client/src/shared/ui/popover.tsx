import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/shared/lib/cn";
import { Button } from "./button";
import { ButtonProps } from "./button";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  Omit<
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>,
    "asChild"
  > & {
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
  }
>(
  (
    { className, variant = "outline", children, size = "sm", ...props },
    ref
  ) => (
    <PopoverPrimitive.Trigger
      asChild
      ref={ref}
      className={cn(className)}
      {...props}>
      <Button variant={variant} size={size}>
        {children}
      </Button>
    </PopoverPrimitive.Trigger>
  )
);

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 ~w-[18rem]/[22rem] rounded-main bg-popover p-5 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
