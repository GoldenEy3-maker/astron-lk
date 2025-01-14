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
import { AnimatePresence, motion } from "motion/react";
import { MailSendedAlert } from "./mail-sended-alert";
import { ErrorAlert } from "@/shared/ui/error-alert";

type RecoveryPasswordSendLinkFormProps = {} & React.ComponentProps<"div">;

export function RecoveryPasswordSendLinkForm(
  props: RecoveryPasswordSendLinkFormProps
) {
  const {
    form,
    isPending,
    recoveryPasswordSendLinkHandler,
    isSuccess,
    isError,
    error,
  } = useRecoveryPasswordSendLinkForm();

  return (
    <div {...props}>
      <AnimatePresence>
        {isSuccess ? (
          <motion.div
            key="success-alert"
            layoutId="success-alert"
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{ height: "auto", opacity: 1, marginBottom: "1.5rem" }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}>
            <MailSendedAlert />
          </motion.div>
        ) : isError ? (
          <motion.div
            key="error-alert"
            layoutId="error-alert"
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{ height: "auto", opacity: 1, marginBottom: "1.5rem" }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}>
            <ErrorAlert error={error} />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="bg-card ~px-7/12 ~py-5/9 rounded-main">
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
    </div>
  );
}
