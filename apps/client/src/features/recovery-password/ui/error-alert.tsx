import { Alert, AlertHeader, AlertTitle } from "@/shared/ui/alert";
import { Icons } from "@/shared/ui/icons";

type ErrorAlertProps = {
  error: string;
} & React.ComponentProps<"div">;

export function ErrorAlert({ error, ...props }: ErrorAlertProps) {
  return (
    <Alert variant="destructive" {...props}>
      <AlertHeader className="mb-0">
        <Icons.Danger />
        <AlertTitle>{error}</AlertTitle>
      </AlertHeader>
    </Alert>
  );
}
