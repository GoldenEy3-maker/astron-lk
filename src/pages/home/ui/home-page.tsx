import { useDocumentTitle } from "usehooks-ts";

export function HomePage() {
  useDocumentTitle("Главная");
  return (
    <main>
      <h1>Home Page</h1>
    </main>
  );
}
