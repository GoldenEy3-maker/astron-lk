import { z } from "zod";
import { schemas } from "@/shared/api/v1";

export const PartnerStatusKeyToValueMap: Record<
  NonNullable<z.infer<typeof schemas.PartnerCard>["status"]>,
  string
> = {
  platinum: "Платиновый Партнёр",
  gold: "Золотой Партнёр",
  silver: "Серебряный Партнёр",
} as const;
