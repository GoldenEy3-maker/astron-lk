import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@/shared/ui/dialog";
import { useState } from "react";
import { ChangePasswordForm } from "./change-password-form";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useMediaQuery } from "usehooks-ts";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";

export function ChangePasswordDialog() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger variant="outline">Сменить пароль</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <VisuallyHidden>
              <DialogDescription>
                Изменить пароль вашего аккаунта
              </DialogDescription>
            </VisuallyHidden>
            <DialogTitle className="text-h3">Смена пароля</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <ChangePasswordForm
            onSuccess={() => setOpen(false)}
            onCancel={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Сменить пароль</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <VisuallyHidden>
            <DrawerTitle>Смена пароля</DrawerTitle>
            <DrawerDescription>
              Измените пароль для вашего аккаунта
            </DrawerDescription>
          </VisuallyHidden>
          <h3 className="text-h3">Смена пароля</h3>
        </DrawerHeader>
        <ChangePasswordForm
          onSuccess={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        />
      </DrawerContent>
    </Drawer>
  );
}
