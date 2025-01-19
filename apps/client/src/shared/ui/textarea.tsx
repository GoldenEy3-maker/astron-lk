import * as React from "react";

import { cn } from "@/shared/lib/cn";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, onChange, ...props }, ref) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useImperativeHandle(ref, () => {
    return textareaRef.current!;
  });

  function autoresize() {
    if (textareaRef.current) {
      if (textareaRef.current.scrollHeight > 200) {
        textareaRef.current.style.height = "200px";
        textareaRef.current.style.overflow = "auto";
      } else {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.overflow = "hidden";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }
  }

  React.useEffect(autoresize, []);

  return (
    <textarea
      className={cn(
        "flex min-h-16 resize-none w-full rounded-xl border border-border bg-card aria-[invalid=true]:border-destructive aria-[invalid=true]:text-destructive aria-[invalid=true]:ring-destructive px-5 py-2.5 overflow-hidden text-base transition ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-input md:text-lg",
        className
      )}
      onChange={(e) => {
        onChange?.(e);
        autoresize();
      }}
      ref={textareaRef}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
