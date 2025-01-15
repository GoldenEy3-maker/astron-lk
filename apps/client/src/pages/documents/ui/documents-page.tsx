import { Documents } from "@/entities/document";
import { useRef } from "react";

export function DocumentsPage() {
  const scrollToRef = useRef<HTMLDivElement>(null);
  return (
    <div className="col-span-full">
      <h1 className="text-h1 text-heading-h2" ref={scrollToRef}>
        Документы
      </h1>
      <Documents limit={12} scrollToRef={scrollToRef} className="~mt-1/3" />
    </div>
  );
}
