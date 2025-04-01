import { useQuery } from "@tanstack/react-query";
import { getFactoryExtraQueryOptions } from "../api/factory-query";
import {
  InfoBlockParser,
  InfoBlockParserProps,
  InfoBlockSkeleton,
} from "@/features/info-block-parsing";

type FactoryExtraProps = {} & Omit<InfoBlockParserProps, "content">;

export function FactoryExtra(props: FactoryExtraProps) {
  const { data, isLoading } = useQuery(getFactoryExtraQueryOptions());

  if (isLoading) return <InfoBlockSkeleton {...props} />;

  if (!data) return null;

  return <InfoBlockParser content={data} {...props} />;
}
