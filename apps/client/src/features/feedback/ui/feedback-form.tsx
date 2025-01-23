import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";
import { PhoneInput } from "@/shared/ui/phone-input";
import { FeedbackFormSchema } from "../model/feedback-form-schema";
import { Checkbox } from "@/shared/ui/checkbox";
import { useFeedbackForm } from "../lib/use-feedback-form";
import { unformatPhone } from "@/shared/lib/format-phone";

export function FeedbackForm() {
  const { form, isPending, sendFeedbackHandler } = useFeedbackForm();

  function onSubmit(values: FeedbackFormSchema) {
    sendFeedbackHandler({
      ...values,
      phone: unformatPhone(values.phone) ?? "",
    });
  }

  return (
    <Form {...form}>
      <form className="~space-y-6/9" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 grid-cols-1 ~gap-x-6/14 ~gap-y-4/6">
          <FormField
            control={form.control}
            name="fio"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>ФИО</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <PhoneInput placeholder="+7" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            disabled={isPending}
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Комментарий</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <FormField
            control={form.control}
            name="privacy"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3">
                  <FormControl>
                    <Checkbox
                      disabled={field.disabled}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      ref={field.ref}
                      onBlur={field.onBlur}
                      name={field.name}
                    />
                  </FormControl>
                  <FormLabel className="text-sm">
                    Я&nbsp;прочитал{" "}
                    <Button
                      asChild
                      variant="link"
                      size="hug"
                      className="font-normal">
                      <a
                        href="/privacy"
                        target="_blank"
                        className="text-primary">
                        политику конфиденциальности
                      </a>
                    </Button>{" "}
                    и&nbsp;
                    <Button
                      asChild
                      variant="link"
                      size="hug"
                      className="font-normal">
                      <a href="/terms" target="_blank" className="text-primary">
                        пользовательское соглашение
                      </a>
                    </Button>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="personalData"
            disabled={isPending}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3">
                  <FormControl>
                    <Checkbox
                      disabled={field.disabled}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      ref={field.ref}
                      onBlur={field.onBlur}
                      name={field.name}
                    />
                  </FormControl>
                  <FormLabel className="text-sm">
                    Да, я&nbsp;добровольно даю&nbsp;своё согласие на&nbsp;
                    <Button
                      asChild
                      variant="link"
                      size="hug"
                      className="font-normal">
                      <a
                        href="/privacy"
                        target="_blank"
                        className="text-primary">
                        обработку персональных данных
                      </a>
                    </Button>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isPending}>Отправить</Button>
      </form>
    </Form>
  );
}
