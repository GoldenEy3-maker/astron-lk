import { cn } from "../lib/cn";

export function Main({
  children,
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main className={cn("col-[main]", className)} {...props}>
      {children}
    </main>
  );
}
