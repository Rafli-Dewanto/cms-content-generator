import supabase from "@/lib/supabase";
import { getErrorMessage } from "@/utils/get-error-msg";
import { CreateContentProps } from "@/types";

export const createContent = async (props: CreateContentProps) => {
  const { title, html, urlKey, active, cookies, puckConf } = props;
  try {
    const { error } = await supabase.from("contents").insert({
      title,
      content: html,
      url_key: urlKey,
      status: active,
      user_id: cookies?.userEmail,
      puck_config: puckConf,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
