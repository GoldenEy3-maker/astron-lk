import { Button } from "@/shared/ui/button";

export function Footer() {
  return (
    <footer className="col-[main] flex flex-wrap items-center ~py-4/10 justify-between gap-x-6 gap-y-1">
      <p>© Astron Buildings, 2024 </p>
      <Button asChild variant="ghost" size="hug" className="text-sm">
        <a href="https://countryagency.ru/" target="_blank">
          сайт от country
        </a>
      </Button>
    </footer>
  );
}
