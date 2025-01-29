import { cn } from "@/shared/lib/cn";
import { UserBannedAlert } from "./user-banned-alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Checkbox } from "@/shared/ui/checkbox";
import { Button } from "@/shared/ui/button";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants/routes";
import { AnimatePresence, motion } from "motion/react";
import { useSignInForm } from "../lib/use-sign-in-form";

type SignInFormProps = {} & React.ComponentProps<"div">;

export function SignInForm({ className, ...props }: SignInFormProps) {
  const { form, isPending, isUserBanned, signInHandler } = useSignInForm();

  return (
    <div className={cn(className)} {...props}>
      <AnimatePresence>
        {isUserBanned ? (
          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: "1rem" }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}>
            <UserBannedAlert />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(signInHandler)}
          className="bg-card rounded-main ~py-5/9 ~px-7/12">
          <div className="~space-y-4/5">
            <FormField
              control={form.control}
              name="login"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Логин</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between">
                    <span>Пароль</span>
                    <Button
                      variant="link"
                      asChild
                      size="hug"
                      className="font-normal">
                      <Link to={Routes.RecoveryPasswordSendLink}>
                        Забыли пароль?
                      </Link>
                    </Button>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      type="password"
                      withTrailingReveal
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="mt-6 space-y-0 flex items-center gap-3">
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
                <FormLabel className="text-sm">Запомнить меня</FormLabel>
              </FormItem>
            )}
          />
          <div className="~mt-6/8 flex items-center gap-4">
            <Button disabled={isPending || isUserBanned}>
              Войти в личный кабинет
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
