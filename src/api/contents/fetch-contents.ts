import supabase from "@/lib/supabase";
import { getErrorMessage } from "@/utils/get-error-msg";

export default async function fetchContents() {
  try {
    const { data, error } = await supabase
      .from("contents")
      .select("*")
      .order("title", { ascending: true });

    if (error != null) {
      return [];
    }

    return data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
}
