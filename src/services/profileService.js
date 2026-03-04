import { supabase } from "../supabaseClient"

export async function createProfile(user) {
  if (!user) return
  const { error } = await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      name: user.user_metadata.full_name,
      email: user.email,
      avatar_url: user.user_metadata.avatar_url,
      updated_at: new Date()
    })

  if (error) {
    console.error("Error creating profile:", error)
  }
}


