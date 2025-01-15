import { Bulletins } from "@/entities/bulletins";
import { useRef } from "react";

export function BulletinsPage() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  return (
    <div className="col-span-full">
      <h1 className="text-h1 text-heading-h2" ref={scrollToRef}>
        Бюллетени
      </h1>
      <Bulletins limit={12} className="~mt-5/8" scrollToRef={scrollToRef} />
    </div>
  );
}
