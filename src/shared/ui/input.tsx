import { cn } from "@/shared/lib/cn";
import { Icons } from "./icons";
import { Button } from "./button";
import { forwardRef, useState } from "react";

const Input = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, disabled, ...props }, ref) => {
    const [isPasswordReveal, setIsPasswordReveal] = useState(false);
    const isPassword = type === "password";

    function togglePasswordReveal() {
      setIsPasswordReveal((prev) => !prev);
    }

    return (
      <div className="relative">
        <input
          type={isPassword ? (isPasswordReveal ? "text" : "password") : type}
          className={cn(
            "flex h-11 w-full rounded-xl border border-border bg-card px-5 py-[0.625rem] text-base ring-offset-background transition file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-input md:text-lg",
            className,
            {
              "pr-12": isPassword,
              "tracking-[0.2rem]": isPassword && !isPasswordReveal,
            }
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        {isPassword ? (
          <div
            className={cn(
              "absolute inset-y-px rounded-xl transition bg-card flex items-center justify-center right-1",
              {
                "bg-input": disabled,
              }
            )}>
            <Button
              type="button"
              variant="icon"
              size="icon"
              disabled={disabled}
              className="text-border hover:text-border-accent"
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
