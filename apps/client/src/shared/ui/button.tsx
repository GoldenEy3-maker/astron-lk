import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none aria-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-accent disabled:bg-secondary disabled:text-secondary-foreground aria-disabled:bg-secondary aria-disabled:text-secondary-foreground",
        "default-reverse":
          "bg-card text-primary hover:bg-primary hover:text-primary-foreground disabled:text-border aria-disabled:text-border",
        outline:
          "border border-border text-foreground hover:border-border-accent disabled:text-muted disabled:border-border aria-disabled:text-muted aria-disabled:border-border",
        "outline-primary":
          "border border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:text-muted disabled:border-border aria-disabled:text-muted aria-disabled:border-border",
        link: "text-primary hover:text-primary-accent disabled:text-muted aria-disabled:text-muted",
        underline:
          "text-primary hover:text-primary-accent disabled:text-muted !rounded-none relative after:absolute after:bottom-0 after:inset-x-0 after:bg-current after:h-px after:transition",
        ghost: "text-foreground-accent hover:bg-muted/15",
        "ghost-primary":
          "text-foreground-accent hover:bg-primary/10 hover:text-primary aria-disabled:bg-muted/15",
      },
      size: {
        default: "min-h-12 px-10 py-3",
        sm: "min-h-10 rounded-xl px-4",
        lg: "min-h-11 rounded-md px-8",
        hug: "",
        "icon-sm": "h-8 w-8 rounded-full",
        icon: "h-10 w-10 rounded-full",
        "icon-lg": "~h-10/12 ~w-10/12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
