import supabase from "@/lib/supabase";
import { editContentSchemaType } from "@/types/schemas/content";
import { getErrorMessage } from "@/utils/get-error-msg";

async function updateContent(contentId: string, content: editContentSchemaType) {
  try {
    const { error } = await supabase
      .from("contents")
      .update({
        title: content.title,
        url_key: content.urlKey,
        status: content.active,
        content: content.html,
        updated_at: new Date().toISOString(),
      })
      .eq("id", String(contentId));
    if (error != null) {
      throw new Error(error.message);
    }
    return {
      message: "Content updated successfully",
    };
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export default updateContent;
