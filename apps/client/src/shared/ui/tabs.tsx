import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/shared/lib/cn";
import { Button } from "./button";
import { ScrollArea, ScrollBar } from "./scroll-area";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    scrollAreaClassName?: string;
  }
>(({ className, children, scrollAreaClassName, ...props }, ref) => (
  <ScrollArea className={cn("w-full", scrollAreaClassName)}>
    <TabsPrimitive.List
      ref={ref}
      className={cn("inline-flex items-center gap-2 w-full p-1", className)}
      {...props}>
      {children}
    </TabsPrimitive.List>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex rounded-full font-normal text-primary ring-1 transition ring-transparent data-[state=active]:ring-primary",
      className
    )}
    asChild
    {...props}>
    <Button variant="ghost-primary" size="sm">
      {children}
    </Button>
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-8 ring-offset-background focus-visible:outline-none transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
