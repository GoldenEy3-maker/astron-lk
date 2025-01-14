import { Alert, AlertHeader, AlertTitle } from "@/shared/ui/alert";
import { Icons } from "@/shared/ui/icons";
import { AxiosError } from "axios";

type ErrorAlertProps = {
  error: Error | null;
} & React.ComponentProps<"div">;

export function ErrorAlert({ error, ...props }: ErrorAlertProps) {
  return (
    <Alert variant="destructive" {...props}>
      <AlertHeader className="mb-0">
        <Icons.Danger className="shrink-0" />
        <AlertTitle>
          {error instanceof AxiosError
            ? error.response?.data.message
            : error?.message}
        </AlertTitle>
      </AlertHeader>
    </Alert>
  );
}
