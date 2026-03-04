import { supabase } from "../supabaseClient"

export default function Navbar({ session }) {
  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <span className="text-lg font-bold">Fitness Tracker</span>
      <div className="flex items-center space-x-4">
        {session?.user?.user_metadata?.avatar_url && (
          <img
            src={session.user.user_metadata.avatar_url}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
        )}
        <button
          onClick={handleSignOut}
          className="text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}