import { forwardRef } from "react";
import { cn } from "../lib/cn";
import { cva, VariantProps } from "class-variance-authority";

const sectionVariants = cva("", {
  variants: {
    space: {
      default: "space-y-12",
      sm: "space-y-9",
    },
  },
  defaultVariants: {
    space: "default",
  },
});

type SectionProps = {} & VariantProps<typeof sectionVariants> &
  React.ComponentProps<"section">;

const Section = forwardRef<HTMLSelectElement, SectionProps>(
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
          "flex justify-between gap-6 items-end flex-wrap",
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
