import {
  AcademyBenefitsCard,
  AcademyBenefitsCardSkeleton,
  AcademyBenefitsTagsBadge,
  AcademyBenefitsTagsFilter,
} from "@/entities/academy";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";
import { Button } from "@/shared/ui/button";
import { enumerate } from "@/shared/lib/enumerate";
import { Skeleton } from "@/shared/ui/skeleton";
import { useBenefits } from "../lib/use-benefits";

export function AcademyBenefitsPage() {
  const {
    benefits,
    isBenefitsLoading,
    tags,
    isTagsLoading,
    selectedTags,
    setSelectedTags,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    unselectTag,
  } = useBenefits();

  return (
    <Section space="md" className="col-span-full">
      <SectionHeader className="flex-col items-stretch gap-0">
        <h1 className="text-h1 text-heading-h2">Преимущества</h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-5">
          <div className="flex items-center text-muted">
            <span>Найдено:</span>&nbsp;
            {!isBenefitsLoading ? (
              `${benefits?.totalResults ?? 0} ${enumerate(
                benefits?.totalResults ?? 0,
                ["преимущество", "преимущества", "преимуществ"],
              )}`
            ) : (
              <Skeleton className="inline-block h-4 w-28 rounded-full" />
            )}
          </div>
          <div className="flex flex-1 justify-end">
            <AcademyBenefitsTagsFilter
              data={tags}
              tags={selectedTags}
              onChange={setSelectedTags}
              isLoading={isTagsLoading}
            />
          </div>
        </div>
        {selectedTags.length && tags ? (
          <div className="mt-3 flex max-w-full flex-wrap items-center justify-end gap-2 overflow-hidden">
            {selectedTags.map((tag) => (
              <AcademyBenefitsTagsBadge
                key={tag}
                label={tags.find((t) => t.slug === tag)?.label ?? ""}
                onRemoveClick={() => unselectTag(tag)}
              />
            ))}
          </div>
        ) : null}
      </SectionHeader>
      <SectionContent>
        <div className="grid grid-cols-1 gap-6">
          {!isBenefitsLoading ? (
            benefits?.data.length ? (
              benefits?.data.map((item) => (
                <AcademyBenefitsCard key={item.id} {...item} />
              ))
            ) : (
              <p>Ничего не найдено</p>
            )
          ) : (
            Array.from({ length: 4 }, (_, idx) => (
              <AcademyBenefitsCardSkeleton key={idx} />
            ))
          )}
        </div>
        {hasNextPage ? (
          <div className="col-span-full flex justify-center">
            <Button
              variant="outline-primary"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? "Загрузка..." : "Показать еще"}
            </Button>
          </div>
        ) : null}
      </SectionContent>
    </Section>
  );
}
