import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/shared/lib/cn";
import { Button, ButtonProps } from "./button";
import { Icons } from "./icons";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

type SelectTriggerProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Trigger
> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

function SelectTrigger({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: SelectTriggerProps) {
  return (
    <Button variant={variant} size={size} asChild>
      <SelectPrimitive.Trigger
        className={cn("group [&>span]:line-clamp-1", className)}
        {...props}>
        {children}
        <SelectPrimitive.Icon
          asChild
          className="group-data-[state=open]:rotate-180 text-primary transition-transform duration-200">
          <Icons.ChevronDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    </Button>
  );
}

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

type SelectScrollUpButtonProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.ScrollUpButton
>;

function SelectScrollUpButton({
  className,
  ...props
}: SelectScrollUpButtonProps) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        "flex cursor-default items-center justify-center pb-1",
        className
      )}
      {...props}>
      <ChevronUp className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

type SelectScrollDownButtonProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.ScrollDownButton
>;

function SelectScrollDownButton({
  className,
  ...props
}: SelectScrollDownButtonProps) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        "flex cursor-default items-center justify-center pt-1",
        className
      )}
      {...props}>
      <ChevronDown className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

type SelectContentProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Content
> & {
  position?: "popper" | "fixed";
};

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "relative z-50 max-h-96 max-w-[20rem] min-w-[8rem] overflow-hidden rounded-main py-[0.8125rem] bg-card text-card-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}
SelectContent.displayName = SelectPrimitive.Content.displayName;

type SelectLabelProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Label
>;

function SelectLabel({ className, children, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      className={cn("py-1.5 pl-4 pr-2 text-sm font-semibold", className)}
      {...props}>
      {children}
    </SelectPrimitive.Label>
  );
}

SelectLabel.displayName = SelectPrimitive.Label.displayName;

type SelectItemProps = React.ComponentPropsWithRef<typeof SelectPrimitive.Item>;

function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default gap-2 select-none items-center py-[0.4375rem] px-5 outline-none focus:bg-muted/15 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:text-primary",
        className
      )}
      {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

SelectItem.displayName = SelectPrimitive.Item.displayName;

type SelectSeparatorProps = React.ComponentPropsWithRef<
  typeof SelectPrimitive.Separator
>;

function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-stroke", className)}
      {...props}
    />
  );
}

SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
