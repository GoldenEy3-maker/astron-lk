import { ValueOf } from "@/shared/lib/types/utility";

export const DocumentsSortKeys = {
  Latest: "latest",
  Oldest: "oldest",
} as const;

export type DocumentsSortKeys = ValueOf<typeof DocumentsSortKeys>;

export const TranslateDocumentsSortKeys: Record<DocumentsSortKeys, string> = {
  latest: "Сначала новые",
  oldest: "Сначала старые",
} as const;
