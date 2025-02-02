import { QueryClient } from "@tanstack/react-query";
import { ZodiosError } from "@zodios/core";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 15,
      retry: 1,
      throwOnError: (error) => {
        if (error instanceof ZodiosError)
          console.error("Ошибка валидации схемы:", error);
        else if (error instanceof AxiosError)
          console.error("Ошибка запроса:", error);
        else console.error("Неожиданная ошибка:", error);

        return false;
      },
    },
  },
});
