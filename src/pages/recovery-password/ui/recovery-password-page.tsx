import { RecoveryPasswordForm } from "@/features/recovery-password";
import { useParams } from "react-router-dom";

export function RecoveryPasswordPage() {
  const params = useParams<{ token: string }>();
  return (
    <div>
      <h1 className="text-h1">Восстановление пароля</h1>
      <RecoveryPasswordForm className="mt-9" token={params.token ?? ""} />
    </div>
  );
}
