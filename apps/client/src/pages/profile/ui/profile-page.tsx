import { useQuery } from "@tanstack/react-query";
import { formatPhone } from "@/shared/lib/format-phone";
import { Button } from "@/shared/ui/button";
import { useSignOut } from "@/features/auth";
import { ChangePasswordDialog } from "@/features/change-password";
import { TextMorph } from "@/shared/ui/text-morph";
import { getSessionQueryOptions } from "@/shared/api/session-query";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { getPartnerBySessionQueryOptions } from "@/entities/partner/api/partner-query";

export function ProfilePage() {
  const { data: session } = useQuery(getSessionQueryOptions());
  const { data: partner, isLoading } = useQuery(
    getPartnerBySessionQueryOptions()
  );
  const { signOutHandler, isPending } = useSignOut();

  return (
    <Section space="lg" className="col-span-full">
      <SectionHeader>
        <h1 className="text-h1 text-heading-h2">
          {session?.surname} {session?.name}
        </h1>
      </SectionHeader>
      <SectionContent className="~mt-6/9">
        <dl>
          <dt className="text-muted">ФИО</dt>
          <dd>
            {session?.surname} {session?.name} {session?.patronymic}
          </dd>
          {session?.role === "partner" ? (
            <>
              <dt className="text-muted ~mt-4/7">Партнёр-Строитель</dt>
              <dd>
                <TextMorph as="span">
                  {!isLoading && partner ? partner.title : "Загрузка..."}
                </TextMorph>
              </dd>
            </>
          ) : null}
          <dt className="text-muted ~mt-4/7">Контактный телефон</dt>
          <dd>{formatPhone(session?.phone ?? "")}</dd>
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
      </SectionContent>
    </Section>
  );
}
