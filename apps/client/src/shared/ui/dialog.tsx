import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/shared/lib/cn";
import { ScrollArea } from "./scroll-area";
import { Button, ButtonProps } from "./button";
import { Icons } from "./icons";

const Dialog = DialogPrimitive.Root;

type DialogTriggerProps = Omit<
  React.ComponentPropsWithRef<typeof DialogPrimitive.Trigger>,
  "asChild"
> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

function DialogTrigger({
  variant = "default",
  size = "default",
  ...props
}: DialogTriggerProps) {
  return (
    <DialogPrimitive.Trigger asChild {...props}>
      <Button variant={variant} size={size}>
        {props.children}
      </Button>
    </DialogPrimitive.Trigger>
  );
}

const DialogPortal = DialogPrimitive.Portal;

type DialogCloseProps = Omit<
  React.ComponentPropsWithRef<typeof DialogPrimitive.Close>,
  "asChild"
> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

function DialogClose({
  className,
  variant = "ghost",
  size = "icon",
  ...props
}: DialogCloseProps) {
  return (
    <DialogPrimitive.Close
      className={cn(
        "text-border hover:bg-transparent hover:text-foreground",
        className,
      )}
      asChild
      {...props}
    >
      <Button variant={variant} size={size}>
        {props.children || <Icons.X />}
      </Button>
    </DialogPrimitive.Close>
  );
}

type DialogOverlayProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Overlay
>;

function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 grid place-items-center bg-black/70 supports-[backdrop-filter]:backdrop-blur-sm",
        "data-[state=closed]:duration-200 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  );
}

type DialogContentProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Content
> & {
  scrollAreaClassName?: string;
  wrapperClassName?: string;
  overlayClassName?: string;
  isOutsideClose?: boolean;
};

function DialogContent({
  className,
  children,
  onPointerDownOutside,
  scrollAreaClassName,
  wrapperClassName,
  overlayClassName,
  isOutsideClose,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay className={overlayClassName}>
        <DialogPrimitive.Content
          onPointerDownOutside={(e) => {
            if ((e.target as HTMLElement).closest(".toaster"))
              e.preventDefault();
            onPointerDownOutside?.(e);
          }}
          className={cn(
            "z-50 flex w-full max-w-[42rem] flex-col gap-8 overflow-hidden rounded-main bg-card shadow-lg",
            "data-[state=closed]:duration-200 data-[state=open]:duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            className,
          )}
          {...props}
        >
          {isOutsideClose ? (
            <div className="absolute right-3 top-3 z-10 flex justify-end rounded-full sm:static">
              <DialogClose className="bg-zinc-700 hover:bg-zinc-800 hover:text-white sm:bg-transparent" />
            </div>
          ) : null}
          <ScrollArea
            className={cn(
              "flex max-h-dvh w-full flex-col",
              scrollAreaClassName,
            )}
          >
            <div
              className={cn(
                "flex w-full flex-col gap-8 px-12 py-9",
                wrapperClassName,
              )}
            >
              {children}
            </div>
          </ScrollArea>
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  );
}

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
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

type DialogTitleProps = Omit<
  React.ComponentPropsWithRef<typeof DialogPrimitive.Title>,
  "asChild"
>;

function DialogTitle({ className, children, ...props }: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      className={cn("text-h3", className)}
      asChild
      {...props}
    >
      <h3>{children}</h3>
    </DialogPrimitive.Title>
  );
}

type DialogDescriptionProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Description
>;

function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

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
