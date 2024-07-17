import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.toString();
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.toString();

if (supabaseUrl == null || supabaseKey == null) {
  throw new Error("Please provide a SUPABASE_URL and SUPABASE_KEY");
}

let supabaseInstance: ReturnType<typeof createClient<Database>> | null = null;

const getSupabaseInstance = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient<Database>(supabaseUrl, supabaseKey);
  }
  return supabaseInstance;
};

const supabase = getSupabaseInstance();

export default supabase;
