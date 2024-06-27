import getContent from "@/api/contents/get-content";
import { Content } from "@/types";
import { useQuery } from "@tanstack/react-query";

const STALE_TIME = 2 * 1000;

export function useContent(id: string) {
  return useQuery<Content, Error>({
    queryKey: ["content"],
    queryFn: () => getContent(id),
    retry: 2,
    staleTime: STALE_TIME,
    refetchOnMount: true,
  });
}
