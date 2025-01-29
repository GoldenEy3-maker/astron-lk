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
import { Icons } from "@/shared/ui/icons";
import { useChangePasswordForm } from "../lib/use-change-password-form";

type ChangePasswordFormProps = {
  onCancel?: () => void;
  onSuccess?: () => void;
};

export function ChangePasswordForm({
  onCancel,
  onSuccess,
}: ChangePasswordFormProps) {
  const { form, changePasswordHandler, isPending } = useChangePasswordForm({
    onSuccess,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(changePasswordHandler)}
        className="space-y-5">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Старый пароль</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="password"
                  autoFocus
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Новый пароль</FormLabel>
              <FormControl>
                <Input disabled={isPending} type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Подтверждение нового пароля</FormLabel>
              <FormControl>
                <Input disabled={isPending} type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-2 !mt-3">
          <Icons.InfoCircle className="text-primary shrink-0" />
          <span className="text-sm">
            Пароль должен состоять минимум из 6 символов
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 !mt-8">
          <Button
            type="submit"
            disabled={isPending}
            className="flex-1 xs:flex-none">
            Сохранить
          </Button>
          {onCancel ? (
            <Button
              type="button"
              variant="outline-primary"
              className="text-primary flex-1 xs:flex-none"
              onClick={onCancel}
              disabled={isPending}>
              Отмена
            </Button>
          ) : null}
        </div>
      </form>
    </Form>
  );
}
