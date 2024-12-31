import { Main } from "@/shared/ui/main";
import { useDocumentTitle } from "usehooks-ts";

export function HomePage() {
  useDocumentTitle("Главная");
  return (
    <Main>
      <h1>Home Page</h1>
    </Main>
  );
}
