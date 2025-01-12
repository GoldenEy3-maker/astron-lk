import { Documents } from "@/entities/document";

export function DocumentsPage() {
  return (
    <div className="col-span-full">
      <h1 className="text-h1 text-heading-h2">Документы</h1>
      <Documents limit={12} className="mt-3" />
    </div>
  );
}
