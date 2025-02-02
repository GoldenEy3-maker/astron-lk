import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/shared/lib/cn";
import { Button, ButtonProps } from "./button";

type DrawerProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

function Drawer({ shouldScaleBackground = true, ...props }: DrawerProps) {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
    />
  );
}

type DrawerTriggerProps = Omit<
  React.ComponentPropsWithRef<typeof DrawerPrimitive.Trigger>,
  "asChild"
> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

function DrawerTrigger({
  children,
  variant = "default",
  size = "default",
  ...props
}: DrawerTriggerProps) {
  return (
    <DrawerPrimitive.Trigger asChild {...props}>
      <Button variant={variant} size={size}>
        {children}
      </Button>
    </DrawerPrimitive.Trigger>
  );
}

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

type DrawerOverlayProps = React.ComponentPropsWithRef<
  typeof DrawerPrimitive.Overlay
>;

function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
  return (
    <DrawerPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/70 supports-[backdrop-filter]:backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}

type DrawerContentProps = React.ComponentPropsWithRef<
  typeof DrawerPrimitive.Content
>;

function DrawerContent({ className, children, ...props }: DrawerContentProps) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        onPointerDownOutside={(e) => {
          if ((e.target as HTMLElement).closest(".toaster")) e.preventDefault();
        }}
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 flex h-auto max-h-[82vh] flex-col rounded-t-[10px] border bg-card px-5 pb-6",
          className,
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-1 w-[100px] shrink-0 rounded-full bg-muted" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid gap-1.5 pb-4 pt-3 text-center sm:text-left",
        className,
      )}
      {...props}
    />
  );
}

function DrawerFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

type DrawerTitleProps = React.ComponentPropsWithRef<
  typeof DrawerPrimitive.Title
>;

function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  return (
    <DrawerPrimitive.Title
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

type DrawerDescriptionProps = React.ComponentPropsWithRef<
  typeof DrawerPrimitive.Description
>;

function DrawerDescription({ className, ...props }: DrawerDescriptionProps) {
  return (
    <DrawerPrimitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
