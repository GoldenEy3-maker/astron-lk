import {
  Alert,
  AlertHeader,
  AlertTitle,
  AlertDescription,
} from "@/shared/ui/alert";
import { Icons } from "@/shared/ui/icons";

export function MailSendedAlert() {
  return (
    <Alert variant="success">
      <AlertHeader>
        <Icons.CheckCircle />
        <AlertTitle>Письмо отправлено</AlertTitle>
      </AlertHeader>
      <AlertDescription>
        Проверьте ваш почтовый ящик и следуйте инструкциям
      </AlertDescription>
    </Alert>
  );
}
