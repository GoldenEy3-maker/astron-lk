import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/shared/lib/cn";
import { ScrollArea } from "./scroll-area";
import { Button, ButtonProps } from "./button";
import { Icons } from "./icons";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  Omit<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>,
    "asChild"
  > & {
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
  }
>(({ variant = "default", size = "default", ...props }, ref) => {
  return (
    <DialogPrimitive.Trigger ref={ref} asChild {...props}>
      <Button variant={variant} size={size}>
        {props.children}
      </Button>
    </DialogPrimitive.Trigger>
  );
});

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  Omit<
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>,
    "asChild"
  > & {
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
  }
>(({ className, variant = "ghost", size = "icon", ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      "text-border hover:bg-transparent hover:text-foreground",
      className
    )}
    asChild
    {...props}>
    <Button variant={variant} size={size}>
      {props.children || <Icons.X />}
    </Button>
  </DialogPrimitive.Close>
));
DialogClose.displayName = DialogPrimitive.Close.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 grid place-items-center bg-black/70 supports-[backdrop-filter]:backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=open]:duration-300 data-[state=closed]:duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    scrollAreaClassName?: string;
    wrapperClassName?: string;
    overlayClassName?: string;
    isOutsideClose?: boolean;
  }
>(
  (
    {
      className,
      children,
      onPointerDownOutside,
      scrollAreaClassName,
      wrapperClassName,
      overlayClassName,
      isOutsideClose,
      ...props
    },
    ref
  ) => (
    <DialogPortal>
      <DialogOverlay className={overlayClassName}>
        <DialogPrimitive.Content
          onPointerDownOutside={(e) => {
            if ((e.target as HTMLElement).closest(".toaster"))
              e.preventDefault();
            onPointerDownOutside?.(e);
          }}
          ref={ref}
          className={cn(
            "flex flex-col gap-8 bg-card z-50 max-w-[42rem] w-full rounded-main overflow-hidden shadow-lg",
            "data-[state=open]:animate-in data-[state=open]:duration-300 data-[state=closed]:duration-200 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            className
          )}
          {...props}>
          {isOutsideClose ? (
            <div className="flex justify-end z-10 absolute top-3 rounded-full right-3 sm:static">
              <DialogClose className="hover:text-white bg-zinc-700 hover:bg-zinc-800 sm:bg-transparent" />
            </div>
          ) : null}
          <ScrollArea
            className={cn(
              "flex flex-col w-full max-h-dvh",
              scrollAreaClassName
            )}>
            <div
              className={cn(
                "w-full px-12 flex flex-col gap-8 py-9",
                wrapperClassName
              )}>
              {children}
            </div>
          </ScrollArea>
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex items-center justify-between gap-6", className)}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  Omit<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>, "asChild">
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-h3", className)}
    asChild
    {...props}>
    <h3>{props.children}</h3>
  </DialogPrimitive.Title>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
