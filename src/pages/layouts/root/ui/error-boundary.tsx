import { Button } from "@/shared/ui/button";
import { AxiosError } from "axios";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function RootErrorBoundary() {
  const error = useRouteError();

  function renderError() {
    if (error instanceof AxiosError) {
      return (
        error.response?.data.message || error.message || JSON.stringify(error)
      );
    }

    if (error instanceof Error) {
      return error.message || JSON.stringify(error);
    }

    if (isRouteErrorResponse(error) && error.status === 404) {
      return error.statusText;
    }

    return "Возникла неожиданная ошибка!";
  }

  return (
    <div>
      <h1>Что-то пошло не так! 😩</h1>
      <pre>{renderError()}</pre>
      <Button onClick={() => window.location.reload()}>
        Перезагрузить приложение
      </Button>
    </div>
  );
}
