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
import { Icons } from "@/shared/ui/icons";
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
        <DialogTrigger asChild>
          <Button variant="outline">Сменить пароль</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <VisuallyHidden>
              <DialogTitle>Смена пароля</DialogTitle>
              <DialogDescription>
                Измените пароль для вашего аккаунта
              </DialogDescription>
            </VisuallyHidden>
            <h3 className="text-h3">Смена пароля</h3>
            <DialogClose asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-border hover:text-foreground">
                <Icons.X />
              </Button>
            </DialogClose>
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
