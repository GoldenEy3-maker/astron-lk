import { Icons } from "@/shared/ui/icons";
import { Checkbox } from "@/shared/ui/checkbox";
import { Popover, PopoverTrigger, PopoverContent } from "@/shared/ui/popover";
import { Label } from "@/shared/ui/label";
import { useId } from "react";
import { useControllableState } from "@/shared/lib/use-controllable-state";
import { Skeleton } from "@/shared/ui/skeleton";
import { z } from "zod";
import { schemas } from "@/shared/api/v1";
import { Button } from "@/shared/ui/button";

type AcademyBenefitsTagsFilterProps = {
  tags: string[];
  onChange: (tags: string[]) => void;
  data?: z.infer<typeof schemas.AcademyBenefitTag>[];
  isLoading?: boolean;
};

export function AcademyBenefitsTagsFilter({
  tags,
  onChange,
  data,
  isLoading,
}: AcademyBenefitsTagsFilterProps) {
  const id = useId();

  const [controlledTags, setControlledTags] = useControllableState<string[]>({
    defaultProp: [],
    prop: tags,
    onChange,
  });

  return (
    <Popover>
      <PopoverTrigger variant="link" className="group text-primary font-normal">
        <span>Фильтр преимуществ</span>
        <span className="group-data-[state=open]:rotate-180 text-primary transition-transform duration-200">
          <Icons.ChevronDown />
        </span>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="bg-card px-0 py-[0.8125rem] overflow-hidden">
        <div className="flex flex-col">
          {!isLoading && data
            ? data?.map((tag) => (
                <Button
                  asChild
                  variant="ghost"
                  className="flex py-[0.4375rem] items-start justify-start cursor-pointer whitespace-normal min-h-0 rounded-none font-normal px-5 gap-3">
                  <Label key={tag.id} htmlFor={`${id}-${tag.id}`}>
                    <Checkbox
                      id={`${id}-${tag.id}`}
                      className="mt-0.5"
                      checked={controlledTags?.includes(tag.slug)}
                      onCheckedChange={(checked) => {
                        setControlledTags((prev) => {
                          if (checked)
                            return prev ? [...prev, tag.slug] : [tag.slug];
                          return prev ? prev.filter((t) => t !== tag.slug) : [];
                        });
                      }}
                    />
                    <span>{tag.label}</span>
                  </Label>
                </Button>
              ))
            : Array(4)
                .fill(null)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-6 w-full my-1.5 rounded-full"
                  />
                ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
