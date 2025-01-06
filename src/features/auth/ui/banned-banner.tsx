import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertHeader,
} from "@/shared/ui/alert";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";

type BannedBannerProps = {} & React.ComponentProps<"div">;

export function BannedBanner(props: BannedBannerProps) {
  return (
    <Alert variant="destructive" {...props}>
      <AlertHeader>
        <Icons.Danger />
        <AlertTitle>Ваш аккаунт заблокирован</AlertTitle>
      </AlertHeader>
      <AlertDescription>
        <p>
          Чтобы восстановить доступ —{" "}
          <Button
            asChild
            variant="underline"
            size="hug"
            className="font-normal">
            <a href="#" target="_blank">
              свяжитесь с нами
            </a>
          </Button>
        </p>
      </AlertDescription>
    </Alert>
  );
}
