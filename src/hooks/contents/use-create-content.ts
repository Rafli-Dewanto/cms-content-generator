import { createContent } from "@/api/contents/create-content";
import { CreateContentProps } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateContent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (content: CreateContentProps) => createContent(content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contents"] });
    },
  });
};
