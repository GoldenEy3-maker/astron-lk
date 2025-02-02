import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/cn";
import { Button, ButtonProps } from "./button";
import { ScrollArea } from "./scroll-area";

const Sheet = SheetPrimitive.Root;

type SheetTriggerProps = Omit<
  React.ComponentPropsWithRef<typeof SheetPrimitive.Trigger>,
  "asChild"
> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

const SheetTrigger = ({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}: SheetTriggerProps) => {
  return (
    <SheetPrimitive.Trigger asChild className={cn(className)} {...props}>
      <Button variant={variant} size={size}>
        {children}
      </Button>
    </SheetPrimitive.Trigger>
  );
};

SheetTrigger.displayName = SheetPrimitive.Trigger.displayName;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

type SheetOverlayProps = {} & React.ComponentPropsWithRef<
  typeof SheetPrimitive.Overlay
>;

const SheetOverlay = ({ className, ...props }: SheetOverlayProps) => {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/70 supports-[backdrop-filter]:backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  );
};
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 bg-card shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

type SheetContentProps = React.ComponentPropsWithRef<
  typeof SheetPrimitive.Content
> &
  VariantProps<typeof sheetVariants> & {
    container?: HTMLElement | null;
    wrapperClassName?: string;
    overlayClassName?: string;
    removeOverlay?: boolean;
  };

const SheetContent = ({
  side = "right",
  className,
  container,
  children,
  wrapperClassName,
  overlayClassName,
  removeOverlay,
  ...props
}: SheetContentProps) => {
  return (
    <SheetPortal container={container}>
      {!removeOverlay && <SheetOverlay className={overlayClassName} />}
      <SheetPrimitive.Content
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        <ScrollArea className="flex h-full w-full flex-col">
          <div className={cn("p-6", wrapperClassName)}>{children}</div>
        </ScrollArea>
        {/* <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close> */}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
};
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
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
SheetFooter.displayName = "SheetFooter";

type SheetTitleProps = React.ComponentPropsWithRef<typeof SheetPrimitive.Title>;

const SheetTitle = ({ className, ...props }: SheetTitleProps) => {
  return (
    <SheetPrimitive.Title
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
};
SheetTitle.displayName = SheetPrimitive.Title.displayName;

type SheetDescriptionProps = React.ComponentPropsWithRef<
  typeof SheetPrimitive.Description
>;

const SheetDescription = ({ className, ...props }: SheetDescriptionProps) => {
  return (
    <SheetPrimitive.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
};
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
