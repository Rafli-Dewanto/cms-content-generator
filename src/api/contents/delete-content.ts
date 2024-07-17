import supabase from "@/lib/supabase";
import { getErrorMessage } from "@/utils/get-error-msg";

export async function deleteContent(id: string) {
  try {
    const { error, statusText, data } = await supabase
      .from("contents")
      .delete()
      .eq("id", id)
      .select();
    if (error != null) {
      throw new Error(`${statusText} ${error.message} ${error.details}`);
    }
    if (data.length === 0) {
      throw new Error("Content not found");
    }
  } catch (error) {
    const errorMsg = getErrorMessage(error);
    throw new Error(errorMsg);
  }
}
