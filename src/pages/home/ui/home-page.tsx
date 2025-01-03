import { apiClient } from "@/shared/api";
import { Main } from "@/shared/ui/main";
import { useQuery } from "@tanstack/react-query";
import { useDocumentTitle } from "usehooks-ts";

export function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["news", "list"],
    queryFn: ({ signal }) => apiClient.getNews({ signal }),
  });
  useDocumentTitle("Главная");
  return (
    <Main>
      <h1>Home Page</h1>
      {!isLoading ? (
        <ul>
          {data?.map((news) => (
            <li key={news.id}>{news.title}</li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </Main>
  );
}
