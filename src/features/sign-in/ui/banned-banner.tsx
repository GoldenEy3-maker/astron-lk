import { Alert, AlertTitle, AlertDescription } from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";

type BannedBannerProps = {} & React.ComponentProps<"div">;

export function BannedBanner(props: BannedBannerProps) {
  return (
    <Alert variant="destructive" {...props}>
      <AlertTitle className="flex items-center gap-2">
        <Icons.Danger />
        <span>Ваш аккаунт заблокирован</span>
      </AlertTitle>
      <AlertDescription className="text-foreground">
        <p>
          Чтобы восстановить доступ —{" "}
          <Button
            asChild
            variant="ghost"
            size="hug"
            className="underline underline-offset-8 font-normal decoration-current">
            <a href="#" target="_blank">
              свяжитесь с нами
            </a>
          </Button>
        </p>
      </AlertDescription>
    </Alert>
  );
}
