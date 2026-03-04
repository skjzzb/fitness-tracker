import { useEffect } from "react"
import Navbar from "../components/Navbar"
import AddMeal from "../components/AddMeal"
import { createProfile } from "../services/profileService"

export default function Dashboard({ session }) {
  useEffect(() => {
    createProfile(session.user)
  }, [session])

  return (
    <div className="max-w-md mx-auto p-4">
      <Navbar session={session} />
      <h1 className="text-xl font-bold my-4">
        Welcome {session.user.user_metadata.full_name}
      </h1>
      <AddMeal userId={session.user.id} />
    </div>
  )
}