import { cn } from "@/shared/lib/cn";
import { Icons } from "./icons";
import { Button } from "./button";
import { useState } from "react";

type InputProps = React.ComponentPropsWithRef<"input"> & {
  withTrailingReveal?: boolean;
  wrapperClassName?: string;
  trailingIconClassName?: string;
  onClear?: () => void;
};

function Input({
  className,
  type,
  disabled,
  withTrailingReveal,
  wrapperClassName,
  trailingIconClassName,
  onClear,
  ...props
}: InputProps) {
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
          "flex w-full rounded-xl border border-border bg-card px-5 py-2.5 ring-offset-background transition ~text-base/lg ~h-10/11 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-input aria-[invalid=true]:border-destructive aria-[invalid=true]:text-destructive aria-[invalid=true]:ring-destructive",
          {
            "pr-12": isPassword || isSearch,
            "tracking-[0.2rem]": isPassword && !isPasswordReveal,
          },
          className,
        )}
        disabled={disabled}
        {...props}
      />
      {isSearch && props.value ? (
        <div
          className={cn(
            "absolute inset-y-px right-1 flex items-center justify-center rounded-xl transition",
            trailingIconClassName,
          )}
        >
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="text-muted hover:bg-transparent hover:text-foreground"
            onClick={onClear}
          >
            <Icons.X />
          </Button>
        </div>
      ) : null}
      {isPassword && withTrailingReveal ? (
        <div
          className={cn(
            "absolute inset-y-px right-1 flex items-center justify-center rounded-xl transition",
            trailingIconClassName,
          )}
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            disabled={disabled}
            className="rounded-xl text-border hover:text-border-accent"
            onClick={togglePasswordReveal}
          >
            <Icons.EyeSlash />
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export { Input };
