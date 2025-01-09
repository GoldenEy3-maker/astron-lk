import { getUserCompanyQueryOptions } from "@/entities/company";
import { useSession } from "@/shared/model/session-store";
import { useQuery } from "@tanstack/react-query";
import { phoneMask } from "@/shared/lib/phone-mask";
import { Button } from "@/shared/ui/button";
import { useSignOut } from "@/features/auth";
import { ChangePasswordDialog } from "@/features/change-password";
import { TextMorph } from "@/shared/ui/text-morph";

export function ProfilePage() {
  const user = useSession((state) => state.user);
  const { data: company, isLoading } = useQuery(getUserCompanyQueryOptions());
  const { signOutHandler, isPending } = useSignOut();

  return (
    <div className="col-span-full">
      <h1 className="text-h1 text-heading-h2">
        {user?.surname} {user?.name}
      </h1>
      <dl className="mt-9">
        <dt className="text-muted">ФИО</dt>
        <dd>
          {user?.surname} {user?.name} {user?.patronymic}
        </dd>
        <dt className="text-muted mt-7">Партнёр-Строитель</dt>
        <dd>
          <TextMorph as="span">
            {!isLoading && company ? company.title : "Загрузка..."}
          </TextMorph>
        </dd>
        <dt className="text-muted mt-7">Контактный телефон</dt>
        <dd>{phoneMask(user?.phone ?? "")}</dd>
        <dt className="text-muted mt-7">E-mail</dt>
        <dd>{user?.email}</dd>
      </dl>
      <div className="flex items-center gap-5 mt-12">
        <Button disabled={isPending} onClick={signOutHandler}>
          Выйти из аккаунта
        </Button>
        <ChangePasswordDialog />
      </div>
    </div>
  );
}
