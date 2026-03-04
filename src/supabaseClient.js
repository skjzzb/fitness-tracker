import { createClient } from '@supabase/supabase-js'

// supabase credentials are stored in environment variables for security.
// Vite exposes variables prefixed with VITE_ via import.meta.env.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
