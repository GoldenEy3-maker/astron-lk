import { useDocumentTitle } from "usehooks-ts";

export function HomePage() {
  useDocumentTitle("Главная");
  return (
    <div>
      <h1 className="text-h1">Home Page</h1>
      {/* <section className="min-h-screen"></section> */}
      {/* <section className="min-h-screen"></section> */}
    </div>
  );
}
