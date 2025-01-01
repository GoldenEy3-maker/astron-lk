import { cn } from "../lib/cn";

export function Main({
  children,
  className,
  ...props
}: React.ComponentProps<"main">) {
  return (
    <main
      className={cn(
        "col-[main] grid grid-cols-subgrid auto-rows-max",
        className
      )}
      {...props}>
      {children}
    </main>
  );
}
