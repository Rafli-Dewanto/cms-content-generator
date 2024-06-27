import { deleteContent } from "@/api/contents/delete-content";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteContent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteContent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contents"] });
    },
  });
}
