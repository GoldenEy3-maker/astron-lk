import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { Icons } from "./icons";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      containerAriaLabel="Уведомления"
      theme={theme as ToasterProps["theme"]}
      className="toaster group ![--width:400px]"
      toastOptions={{
        classNames: {
          toast:
            "group toast bg-card border-none grid ~py-4/5 ~px-6/8 gap-x-3 gap-y-2 grid-cols-[auto_1fr] !pointer-events-auto text-foreground border-border rounded-main text-base shadow-lg",
          title: "col-start-2 row-start-1 font-normal text-h4",
          icon: "col-start-1 row-start-1 m-0 w-auto h-auto",
          description: "text-foreground row-start-2 col-span-2",
          error: "!text-destructive",
          success: "!text-success",
          content: "contents",
        },
      }}
      icons={{
        success: <Icons.CheckCircle />,
        error: <Icons.Danger />,
      }}
      {...props}
    />
  );
};

export { Toaster };
