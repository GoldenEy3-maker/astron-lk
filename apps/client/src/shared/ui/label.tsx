import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/shared/lib/cn";

type LabelProps = React.ComponentPropsWithRef<typeof LabelPrimitive.Root>;

function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      className={cn(
        "text-base leading-[1.3] peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  );
}

export { Label };
