import { NotSecurePasswordAlert } from "./not-secure-password-alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Icons } from "@/shared/ui/icons";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/shared/ui/button";
import { useRecoveryPasswordForm } from "../lib/use-recovery-password-form";
import React from "react";
import { RecoveryPasswordSuccessAlert } from "./recovery-password-success-alert";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/constants/routes";
import { SecurePasswordAlert } from "./secure-password-alert";
import { ErrorAlert } from "@/shared/ui/error-alert";

type RecoveryPasswordFormProps = {
  token: string;
} & React.ComponentProps<"div">;

export function RecoveryPasswordForm({
  token,
  ...props
}: RecoveryPasswordFormProps) {
  const {
    form,
    isPasswordNotSecured,
    recoveryPasswordHandler,
    isSubmitted,
    isPending,
    isSuccess,
    isError,
    error,
  } = useRecoveryPasswordForm(token);

  return (
    <div {...props}>
      <AnimatePresence initial={false} mode="popLayout">
        {isSuccess ? (
          <motion.div
            key="success-alert"
            layoutId="success-alert"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 18,
              mass: 0.3,
            }}>
            <RecoveryPasswordSuccessAlert />
            <Button asChild className="mt-7">
              <Link to={Routes.SignIn}>Войти</Link>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 18,
              mass: 0.3,
            }}>
            <AnimatePresence>
              {isError ? (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: "1rem" }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}>
                  <ErrorAlert error={error} />
                </motion.div>
              ) : isPasswordNotSecured ? (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: "1rem" }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}>
                  <NotSecurePasswordAlert />
                </motion.div>
              ) : isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: "1rem" }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}>
                  <SecurePasswordAlert />
                </motion.div>
              ) : null}
            </AnimatePresence>
            <div className="bg-card ~px-7/12 ~py-5/9 rounded-main">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(recoveryPasswordHandler)}
                  className="~space-y-4/6">
                  <FormField
                    control={form.control}
                    name="password"
                    disabled={isPending}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Новый пароль</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    disabled={isPending}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Повторите пароль</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex items-center gap-2 mt-4">
                    <Icons.InfoCircle className="text-primary shrink-0" />
                    <span className="text-sm">
                      Пароль должен состоять минимум из 6 символов
                    </span>
                  </div>
                  <Button type="submit" disabled={isPending}>
                    Сохранить
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
