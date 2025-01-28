import { cn } from "../lib/cn";
import { cva, VariantProps } from "class-variance-authority";

const sectionVariants = cva("", {
  variants: {
    space: {
      default: "~space-y-7/12",
      lg: "~space-y-6/9",
      md: "~space-y-5/8",
      sm: "~space-y-4/7",
    },
  },
  defaultVariants: {
    space: "default",
  },
});

type SectionProps = {} & VariantProps<typeof sectionVariants> &
  React.ComponentPropsWithRef<"section">;

function Section({ children, className, space, ...props }: SectionProps) {
  return (
    <section className={cn(sectionVariants({ space, className }))} {...props}>
      {children}
    </section>
  );
}

type SectionHeaderProps = {} & React.ComponentPropsWithRef<"div">;

function SectionHeader({ children, className, ...props }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex justify-between gap-x-6 gap-y-2 items-end flex-wrap",
        className
      )}
      {...props}>
      {children}
    </div>
  );
}

type SectionContentProps = {} & React.ComponentPropsWithRef<"div">;

function SectionContent({
  children,
  className,
  ...props
}: SectionContentProps) {
  return (
    <div className={cn("space-y-12", className)} {...props}>
      {children}
    </div>
  );
}

export { Section, SectionHeader, SectionContent };
