import { ValueOf } from "@/shared/lib/types/utility";

export const PartnersSortKeyMap = {
  ascSales: "asc-sales",
  ascBookings: "asc-bookings",
  ascName: "asc-name",
  descSales: "desc-sales",
  descBookings: "desc-bookings",
  descName: "desc-name",
} as const;

export type PartnersSortKeyMap = ValueOf<typeof PartnersSortKeyMap>;

export const PartnersSortKeyToValueMap: Record<PartnersSortKeyMap, string> = {
  "asc-sales": "По продажам: сначала больше",
  "desc-sales": "По продажам: сначала меньше",
  "asc-bookings": "По букингам: сначала больше",
  "desc-bookings": "По букингам: сначала меньше",
  "asc-name": "По названию: начиная с A",
  "desc-name": "По названию: начиная с Z",
};
