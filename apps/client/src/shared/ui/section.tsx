import { forwardRef } from "react";
import { cn } from "../lib/cn";
import { cva, VariantProps } from "class-variance-authority";

const sectionVariants = cva("", {
  variants: {
    space: {
      default: "~space-y-7/12",
      lg: "~space-y-6/9",
      md: "~space-y-4/7",
    },
  },
  defaultVariants: {
    space: "default",
  },
});

type SectionProps = {} & VariantProps<typeof sectionVariants> &
  React.ComponentProps<"section">;

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, space, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ space, className }))}
        {...props}>
        {children}
      </section>
    );
  }
);

type SectionHeaderProps = {} & React.ComponentProps<"div">;

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex justify-between gap-x-6 gap-y-2 items-end flex-wrap",
          className
        )}
        {...props}>
        {children}
      </div>
    );
  }
);

type SectionContentProps = {} & React.ComponentProps<"div">;

const SectionContent = forwardRef<HTMLDivElement, SectionContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-12", className)} {...props}>
        {children}
      </div>
    );
  }
);

export { Section, SectionHeader, SectionContent };
