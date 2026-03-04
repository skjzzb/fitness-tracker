import { supabase } from "../supabaseClient"

export async function getFoods() {
  return await supabase.from("foods").select("*")
}