import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { useRecoveryPasswordSendLinkForm } from "../model/use-recovery-password-send-link-form";

type RecoveryPasswordSendLinkFormProps = {} & React.ComponentProps<"div">;

export function RecoveryPasswordSendLinkForm({
  className,
  ...props
}: RecoveryPasswordSendLinkFormProps) {
  const { form, isPending, recoveryPasswordSendLinkHandler } =
    useRecoveryPasswordSendLinkForm();

  return (
    <div
      className={cn("bg-card px-12 py-9 rounded-main", className)}
      {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(recoveryPasswordSendLinkHandler)}>
          <FormField
            control={form.control}
            name="email"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h4 className="text-h4 mt-5">
            На указанную почту придёт ссылка для восстановления
          </h4>
          <p className="mt-2">
            Если почтовый адрес устарел,{" "}
            <Button
              asChild
              variant="underline"
              size="hug"
              className="font-normal">
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
