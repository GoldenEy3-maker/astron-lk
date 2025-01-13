import { RecoveryPasswordSendLinkForm } from "@/features/recovery-password";

export function RecoveryPasswordSendLinkPage() {
  return (
    <div>
      <h1 className="text-h1">Восстановление пароля</h1>
      <RecoveryPasswordSendLinkForm className="~mt-6/9" />
    </div>
  );
}
