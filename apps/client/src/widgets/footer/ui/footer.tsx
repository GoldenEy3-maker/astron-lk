import { Button } from "@/shared/ui/button";

export function Footer() {
  return (
    <footer className="col-[main] flex flex-wrap items-center justify-between gap-x-6 gap-y-1 ~py-4/10">
      <p>© Astron Buildings, {new Date().getFullYear()} </p>
      <Button asChild variant="link" size="hug" className="text-sm">
        <a href="https://countryagency.ru/" target="_blank">
          сайт от country
        </a>
      </Button>
    </footer>
  );
}
