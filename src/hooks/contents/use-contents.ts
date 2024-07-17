import fetchContents from "@/api/contents/fetch-contents";
import getContent from "@/api/contents/get-content";
import { Content } from "@/types";
import { useQuery } from "@tanstack/react-query";

const STALE_TIME = 5 * 1000; // 5 seconds

export function useContents(id?: string) {
  return useQuery<Content | Content[], Error>({
    queryKey: id ? ["content", id] : ["contents"],
    queryFn: id ? () => getContent(id) : fetchContents,
    retry: 2,
    staleTime: STALE_TIME,
    refetchOnMount: true,
  });
}
