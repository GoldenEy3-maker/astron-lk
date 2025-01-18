import { ValueOf } from "@/shared/lib/types/utility";

export const DocumentsSortKeyMap = {
  Latest: "latest",
  Oldest: "oldest",
} as const;

export type DocumentsSortKeyMap = ValueOf<typeof DocumentsSortKeyMap>;

export const DocumentsSortKeyToValueMap: Record<DocumentsSortKeyMap, string> = {
  latest: "Сначала новые",
  oldest: "Сначала старые",
} as const;
