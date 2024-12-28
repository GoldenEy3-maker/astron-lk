import { useDocumentTitle } from "usehooks-ts";

export function AboutPage() {
  useDocumentTitle("О компании");
  return (
    <main>
      <h1>About Page</h1>
    </main>
  );
}
