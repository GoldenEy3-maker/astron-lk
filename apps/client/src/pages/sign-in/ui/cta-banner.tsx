import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";

type CTABannerProps = {} & React.ComponentProps<"div">;

export function CTABanner({ className, ...props }: CTABannerProps) {
  return (
    <div
      role="alert"
      className={cn("bg-card ~py-5/9 ~px-7/12 rounded-main", className)}
      {...props}>
      <h3 className="text-h3">До сих пор не являетесь нашим партнёром?</h3>
      <p className="mt-3">
        Получите доступ к клиентской базе, обучающим материалам и всяким разным
        другим полезностям
      </p>
      <div className="flex items-center mt-6">
        <Button asChild variant="outline" className="~px-4/10">
          <a href="#" target="_blank">
            Стать Партнёром-Строителем
          </a>
        </Button>
      </div>
    </div>
  );
}
