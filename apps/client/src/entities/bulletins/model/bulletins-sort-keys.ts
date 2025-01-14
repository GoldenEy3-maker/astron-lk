import { ValueOf } from "@/shared/lib/types/utility";

export const BulletinsSortKeys = {
  Latest: "latest",
  Oldest: "oldest",
} as const;

export const TranslateBulletinsSortKeys: Record<BulletinsSortKeys, string> = {
  latest: "Сначала новые",
  oldest: "Сначала старые",
} as const;

export type BulletinsSortKeys = ValueOf<typeof BulletinsSortKeys>;
