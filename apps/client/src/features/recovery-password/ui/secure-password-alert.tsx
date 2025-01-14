import {
  Alert,
  AlertDescription,
  AlertHeader,
  AlertTitle,
} from "@/shared/ui/alert";
import { Icons } from "@/shared/ui/icons";

export function SecurePasswordAlert() {
  return (
    <Alert variant="success">
      <AlertHeader>
        <Icons.Lock className="shrink-0" />
        <AlertTitle>Надежный пароль</AlertTitle>
      </AlertHeader>
      <AlertDescription>
        Безопасный пароль должен состоять минимум из 6 символов, цифр и
        спецсимволов
      </AlertDescription>
    </Alert>
  );
}
