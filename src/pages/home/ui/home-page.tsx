import { getUserCompanyQueryOptions } from "@/entities/company";
import { apiClient } from "@/shared/api";
import { Main } from "@/shared/ui/main";
import { useQuery } from "@tanstack/react-query";
import { useDocumentTitle } from "usehooks-ts";

export function HomePage() {
  const { data: company, isLoading: isCompanyLoading } = useQuery(
    getUserCompanyQueryOptions()
  );
  const { data: news, isLoading: isNewsLoading } = useQuery({
    queryKey: ["news", "list"],
    queryFn: ({ signal }) => apiClient.getNews({ signal }),
  });
  useDocumentTitle("Главная");
  return (
    <Main>
      <h1>Home Page</h1>
      {!isNewsLoading ? (
        <ul className="col-span-full">
          {news?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <div className="col-span-full">Loading...</div>
      )}
      {!isCompanyLoading && company ? (
        <article className="col-span-full">
          <h3 className="text-h3">{company.title}</h3>
        </article>
      ) : (
        <div className="col-span-full">Loading...</div>
      )}
    </Main>
  );
}
