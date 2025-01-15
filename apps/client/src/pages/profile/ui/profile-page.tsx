import { getUserCompanyQueryOptions } from "@/entities/company";
import { useQuery } from "@tanstack/react-query";
import { phoneMask } from "@/shared/lib/phone-mask";
import { Button } from "@/shared/ui/button";
import { useSignOut } from "@/features/auth";
import { ChangePasswordDialog } from "@/features/change-password";
import { TextMorph } from "@/shared/ui/text-morph";
import { getSessionQueryOptions } from "@/shared/api/session-query";

export function ProfilePage() {
  const { data: session } = useQuery(getSessionQueryOptions());
  const { data: company, isLoading } = useQuery(getUserCompanyQueryOptions());
  const { signOutHandler, isPending } = useSignOut();

  return (
    <div className="col-span-full">
      <h1 className="text-h1 text-heading-h2">
        {session?.surname} {session?.name}
      </h1>
      <dl className="~mt-6/9">
        <dt className="text-muted">ФИО</dt>
        <dd>
          {session?.surname} {session?.name} {session?.patronymic}
        </dd>
        <dt className="text-muted ~mt-4/7">Партнёр-Строитель</dt>
        <dd>
          <TextMorph as="span">
            {!isLoading && company ? company.title : "Загрузка..."}
          </TextMorph>
        </dd>
        <dt className="text-muted ~mt-4/7">Контактный телефон</dt>
        <dd>{phoneMask(session?.phone ?? "")}</dd>
        <dt className="text-muted ~mt-4/7">E-mail</dt>
        <dd>{session?.email}</dd>
      </dl>
      <div className="flex items-center flex-col sm:flex-row ~gap-3/5 ~mt-8/12">
        <Button
          disabled={isPending}
          className="w-full sm:w-auto"
          onClick={signOutHandler}>
          Выйти из аккаунта
        </Button>
        <ChangePasswordDialog />
      </div>
    </div>
  );
}
