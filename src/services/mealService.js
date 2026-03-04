import { supabase } from "../supabaseClient"

export async function addMeal(userId, foodId, quantity) {
  if (!userId || !foodId || !quantity)
    return { data: null, error: "invalid parameters" }

  return await supabase.from("meal_logs").insert({
    user_id: userId,
    food_id: foodId,
    quantity,
  })
}

export async function getTodayMeals(userId) {
  if (!userId) return { data: null, error: "no user" }
  const today = new Date().toISOString().split("T")[0]
  return await supabase
    .from("meal_logs")
    .select("*")
    .eq("user_id", userId)
    .gte("created_at", today)
}