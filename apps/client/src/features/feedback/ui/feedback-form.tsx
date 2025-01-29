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
import { Checkbox } from "@/shared/ui/checkbox";
import { useFeedbackForm } from "../lib/use-feedback-form";

export function FeedbackForm() {
  const { form, isPending, sendFeedbackHandler } = useFeedbackForm();

  return (
    <Form {...form}>
      <form
        className="~space-y-6/9"
        onSubmit={form.handleSubmit(sendFeedbackHandler)}>
        <div className="grid sm:grid-cols-2 grid-cols-1 ~gap-x-6/14 ~gap-y-4/6">
          <FormField
            control={form.control}
            name="fio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ФИО</FormLabel>
                <FormControl>
                  <Input disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Телефон</FormLabel>
                <FormControl>
                  <PhoneInput
                    disabled={isPending}
                    placeholder="+7"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="sm:col-span-2">
                <FormLabel>Комментарий</FormLabel>
                <FormControl>
                  <Textarea disabled={isPending} {...field} />
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
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3">
                  <FormControl>
                    <Checkbox
                      disabled={isPending}
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
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-3">
                  <FormControl>
                    <Checkbox
                      disabled={isPending}
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
