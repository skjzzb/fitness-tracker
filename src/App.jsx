import { useEffect, useState } from "react"
import { supabase } from "./supabaseClient"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {

  const [session,setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({data})=>{
      setSession(data.session)
    })

    supabase.auth.onAuthStateChange((_event,session)=>{
      setSession(session)
    })

  },[])

  if(!session){
    return <Login/>
  }

  return <Dashboard session={session}/>
}

export default App