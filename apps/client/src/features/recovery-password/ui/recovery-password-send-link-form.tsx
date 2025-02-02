import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useRecoveryPasswordSendLinkForm } from "../lib/use-recovery-password-send-link-form";
import { cn } from "@/shared/lib/cn";

type RecoveryPasswordSendLinkFormProps = {} & React.ComponentProps<"div">;

export function RecoveryPasswordSendLinkForm({
  className,
  ...props
}: RecoveryPasswordSendLinkFormProps) {
  const { form, isPending, recoveryPasswordSendLinkHandler } =
    useRecoveryPasswordSendLinkForm();

  return (
    <div
      className={cn("rounded-main bg-card ~px-7/12 ~py-5/9", className)}
      {...props}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(recoveryPasswordSendLinkHandler)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h4 className="mt-5 text-h4">
            На указанную почту придёт ссылка для восстановления
          </h4>
          <p className="mt-2">
            Если почтовый адрес устарел,{" "}
            <Button
              asChild
              variant="underline"
              size="hug"
              className="font-normal"
            >
              <a href="#" target="_blank">
                свяжитесь с нами
              </a>
            </Button>
          </p>
          <Button className="mt-8" disabled={isPending}>
            Отправить ссылку
          </Button>
        </form>
      </Form>
    </div>
  );
}
