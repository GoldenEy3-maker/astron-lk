import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-accent disabled:bg-secondary disabled:text-secondary-foreground",
        outline:
          "border border-primary bg-card text-primary hover:bg-primary hover:text-primary-foreground disabled:text-muted disabled:border-border",
        link: "text-primary hover:text-primary-accent disabled:text-muted",
        underline:
          "text-primary hover:text-primary-accent disabled:text-muted !rounded-none relative after:absolute after:-bottom-1 after:inset-x-0 after:bg-current after:h-px after:transition",
        ghost: "text-foreground-accent hover:bg-muted/15",
      },
      size: {
        default: "h-12 px-10 py-3",
        sm: "h-10 rounded-xl px-3",
        lg: "h-11 rounded-md px-8",
        hug: "",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
