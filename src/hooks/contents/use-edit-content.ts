import updateContent from "@/api/contents/edit-content";
import { editContentSchemaType } from "@/types/schemas/content";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEditContent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ contentId, content }: { contentId: string; content: editContentSchemaType }) =>
      updateContent(contentId, content),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["contents", variables.contentId] });
    },
  });
}
