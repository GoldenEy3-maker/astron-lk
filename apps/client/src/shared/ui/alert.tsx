import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/cn";

const alertVariants = cva("rounded-main ~py-4/5 ~px-7/12 bg-card", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive: "text-destructive",
      success: "text-success",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type AlertProps = React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof alertVariants>;

function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

type AlertHeaderProps = React.ComponentPropsWithRef<"div">;

function AlertHeader({ className, ...props }: AlertHeaderProps) {
  return (
    <div className={cn("mb-2 flex items-center gap-2", className)} {...props} />
  );
}

type AlertTitleProps = React.ComponentPropsWithRef<"h4">;

function AlertTitle({ className, ...props }: AlertTitleProps) {
  return <h4 className={cn("text-h4 leading-none", className)} {...props} />;
}

type AlertDescriptionProps = React.ComponentPropsWithRef<"div">;

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <div
      className={cn("text-foreground ~text-sm/base", className)}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertHeader, AlertDescription };
