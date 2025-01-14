import {
  Alert,
  AlertDescription,
  AlertHeader,
  AlertTitle,
} from "@/shared/ui/alert";
import { Icons } from "@/shared/ui/icons";

export function NotSecurePasswordAlert() {
  return (
    <Alert variant="destructive">
      <AlertHeader>
        <Icons.Danger className="shrink-0" />
        <AlertTitle>Ненадёжный пароль</AlertTitle>
      </AlertHeader>
      <AlertDescription>
        Безопасный пароль должен состоять минимум из 6 символов, цифр и
        спецсимволов
      </AlertDescription>
    </Alert>
  );
}
