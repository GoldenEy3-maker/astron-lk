import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/shared/lib/cn";
import { Button } from "./button";
import { ScrollArea, ScrollBar } from "./scroll-area";

const Tabs = TabsPrimitive.Root;

type TabsListProps = React.ComponentPropsWithRef<typeof TabsPrimitive.List> & {
  scrollAreaClassName?: string;
};

function TabsList({
  className,
  children,
  scrollAreaClassName,
  ...props
}: TabsListProps) {
  return (
    <ScrollArea className={cn("w-full", scrollAreaClassName)}>
      <TabsPrimitive.List
        className={cn("inline-flex w-full items-center gap-2 p-1", className)}
        {...props}
      >
        {children}
      </TabsPrimitive.List>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = Omit<
  React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger>,
  "asChild"
>;

function TabsTrigger({ className, children, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "flex rounded-full font-normal text-primary ring-1 ring-transparent transition data-[state=active]:ring-primary",
        className,
      )}
      asChild
      {...props}
    >
      <Button variant="ghost-primary" size="sm">
        {children}
      </Button>
    </TabsPrimitive.Trigger>
  );
}
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

type TabsContentProps = React.ComponentPropsWithRef<
  typeof TabsPrimitive.Content
>;

function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "mt-8 ring-offset-background transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    />
  );
}
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
