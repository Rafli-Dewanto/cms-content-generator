import supabase from "@/lib/supabase";
import { getErrorMessage } from "@/utils/get-error-msg";

const getContent = async (id: string) => {
  try {
    const { data, error } = await supabase.from("contents").select("*").eq("id", String(id));

    if (error) {
      throw new Error(JSON.stringify(error));
    }

    if (data == null) {
      throw new Error("Content not found");
    }

    return data[0];
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export default getContent;
