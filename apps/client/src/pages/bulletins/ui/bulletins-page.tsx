import { Bulletins } from "@/entities/bulletins";

export function BulletinsPage() {
  return (
    <div className="col-span-full">
      <h1 className="text-h1 text-heading-h2">Бюллетени</h1>
      <Bulletins limit={12} className="~mt-5/8" />
    </div>
  );
}
