import { useQuery } from "@tanstack/react-query";

import { useInfiniteQuery } from "@tanstack/react-query";
import {
  getAcademyBenefitsInfiniteQueryOptions,
  getAcademyBenefitsTagsQueryOptions,
} from "../api/academy-query";
import { parseAsArrayOf, parseAsString, useQueryState } from "nuqs";

export function useBenefits() {
  const [selectedTags, setSelectedTags] = useQueryState<string[]>(
    "tags",
    parseAsArrayOf(parseAsString).withDefault([])
  );

  const {
    data: benefits,
    isLoading: isBenefitsLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    getAcademyBenefitsInfiniteQueryOptions({ tags: selectedTags, limit: 8 })
  );

  const { data: tags, isLoading: isTagsLoading } = useQuery(
    getAcademyBenefitsTagsQueryOptions()
  );

  function unselectTag(slug: string) {
    setSelectedTags(selectedTags.filter((tag) => tag !== slug));
  }

  return {
    benefits,
    isBenefitsLoading,
    tags,
    isTagsLoading,
    selectedTags,
    setSelectedTags,
    unselectTag,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
}
