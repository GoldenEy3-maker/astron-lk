import { cn } from "@/shared/lib/cn";
import { BannedBanner } from "./banned-banner";
import { useForm } from "react-hook-form";
import { loginFormSchema, LoginFormSchema } from "../model/login-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "@/shared/constants/routes";
import { AnimatePresence, motion } from "motion/react";
import { useLogin } from "../api/login";
import { CTABanner } from "./cta-banner";

type LoginFormProps = {} & React.ComponentProps<"div">;

export function LoginForm({ className, ...props }: LoginFormProps) {
  const navigate = useNavigate();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      login: "",
      password: "",
      remember: true,
    },
  });

  const { isPending, isUserBanned, loginHandler } = useLogin({
    onSuccess() {
      navigate(Routes.Home);
      form.reset();
    },
  });

  return (
    <div className={cn(className)} {...props}>
      <AnimatePresence>
        {isUserBanned ? (
          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: "1rem" }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}>
            <BannedBanner />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(loginHandler)}
          className="bg-card rounded-main py-9 px-12">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="login"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Логин</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between">
                    <span>Пароль</span>
                    <Button
                      variant="ghost"
                      asChild
                      size="hug"
                      className="font-normal">
                      <Link to={Routes.ChangePassword}>Забыли пароль?</Link>
                    </Button>
                  </FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="remember"
            disabled={isPending}
            render={({ field }) => (
              <FormItem className="mt-6 space-y-0 flex items-center gap-3">
                <FormControl>
                  <Checkbox
                    disabled={field.disabled}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm">Запомнить меня</FormLabel>
              </FormItem>
            )}
          />
          <div className="mt-8 flex items-center gap-4">
            <Button disabled={isPending || isUserBanned}>
              Войти в личный кабинет
            </Button>
          </div>
        </form>
      </Form>
      <CTABanner className="mt-7" />
    </div>
  );
}
