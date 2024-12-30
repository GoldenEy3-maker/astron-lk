import { Button } from "@/shared/ui/button";
import { useRouteError } from "react-router-dom";

export function RootErrorBoundary() {
  const error = useRouteError() as Error;
  return (
    <div>
      <h1>Что-то пошло не так! 😩</h1>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <Button onClick={() => window.location.reload()}>
        Перезагрузить приложение
      </Button>
    </div>
  );
}
