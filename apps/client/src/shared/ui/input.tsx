import { cn } from "@/shared/lib/cn";
import { Icons } from "./icons";
import { Button } from "./button";
import { forwardRef, useState } from "react";

type InputProps = {
  withTrailingReveal?: boolean;
  wrapperClassName?: string;
  trailingIconClassName?: string;
  onClear?: () => void;
} & React.ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      disabled,
      withTrailingReveal,
      wrapperClassName,
      trailingIconClassName,
      onClear,
      ...props
    },
    ref
  ) => {
    const [isPasswordReveal, setIsPasswordReveal] = useState(false);
    const isPassword = type === "password";
    const isSearch = type === "search";

    function togglePasswordReveal() {
      setIsPasswordReveal((prev) => !prev);
    }

    return (
      <div className={cn("relative", wrapperClassName)}>
        <input
          type={isPassword ? (isPasswordReveal ? "text" : "password") : type}
          className={cn(
            "flex h-11 w-full rounded-xl border border-border aria-[invalid=true]:border-destructive aria-[invalid=true]:text-destructive aria-[invalid=true]:ring-destructive bg-card px-5 py-2.5 text-base ring-offset-background transition file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-input md:text-lg",
            {
              "pr-12": isPassword || isSearch,
              "tracking-[0.2rem]": isPassword && !isPasswordReveal,
            },
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {isSearch && props.value ? (
          <div
            className={cn(
              "absolute inset-y-px rounded-xl transition flex items-center justify-center right-1",
              trailingIconClassName
            )}>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="text-muted hover:text-foreground hover:bg-transparent"
              onClick={onClear}>
              <Icons.X />
            </Button>
          </div>
        ) : null}
        {isPassword && withTrailingReveal ? (
          <div
            className={cn(
              "absolute inset-y-px rounded-xl transition  flex items-center justify-center right-1",
              trailingIconClassName
            )}>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              disabled={disabled}
              className="text-border rounded-xl hover:text-border-accent"
              onClick={togglePasswordReveal}>
              <Icons.EyeSlash />
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
