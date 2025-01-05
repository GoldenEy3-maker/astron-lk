import { forwardRef } from "react";
import { cn } from "../lib/cn";

type SectionProps = {} & React.ComponentProps<"section">;

const Section = forwardRef<HTMLSelectElement, SectionProps>(
  ({ children, ...props }, ref) => {
    return (
      <section ref={ref} {...props}>
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
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

export { Section, SectionHeader, SectionContent };
