import { supabase } from "../supabaseClient"

export default function Login() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin },
    })
  }

  return (
    <div className="flex justify-center mt-20">
      <button
        onClick={loginWithGoogle}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Login with Google
      </button>
    </div>
  )
}