import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/shared/lib/cn";
import { Icons } from "./icons";

type CheckboxProps = React.ComponentPropsWithRef<typeof CheckboxPrimitive.Root>;

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-border ring-offset-background focus:outline-none focus-visible:ring-2 transition focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive aria-[invalid=true]:hover:bg-destructive/10",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}>
        <Icons.Check />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
