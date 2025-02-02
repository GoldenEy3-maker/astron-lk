import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";
import { Icons } from "@/shared/ui/icons";

type AcademyBenefitsTagsBadgeProps = {
  label: string;
  onRemoveClick?: () => void;
} & React.ComponentProps<"div">;

export function AcademyBenefitsTagsBadge({
  label,
  onRemoveClick,
  className,
  ...props
}: AcademyBenefitsTagsBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary",
        className,
      )}
      {...props}
    >
      <span className="truncate">{label}</span>
      {onRemoveClick ? (
        <Button
          variant="link"
          size="hug"
          className="text-border hover:text-border-accent"
          onClick={onRemoveClick}
        >
          <Icons.X />
        </Button>
      ) : null}
    </div>
  );
}
