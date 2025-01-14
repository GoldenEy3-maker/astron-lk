import {
  Alert,
  AlertDescription,
  AlertHeader,
  AlertTitle,
} from "@/shared/ui/alert";
import { Icons } from "@/shared/ui/icons";

export function RecoveryPasswordSuccessAlert() {
  return (
    <Alert variant="success">
      <AlertHeader>
        <Icons.Lock className="shrink-0" />
        <AlertTitle>Пароль успешно сохранен</AlertTitle>
      </AlertHeader>
      <AlertDescription>
        Используйте его при следующей авторизации
      </AlertDescription>
    </Alert>
  );
}
