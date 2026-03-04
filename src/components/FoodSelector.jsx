import { useEffect, useState } from "react"
import { getFoods } from "../services/foodService"

export default function FoodSelector({ onSelect }) {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetch() {
      const { data, error } = await getFoods()
      if (!error) setFoods(data || [])
      setLoading(false)
    }
    fetch()
  }, [])

  return (
    <select
      className="border px-2 py-1 rounded w-full"
      disabled={loading}
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Select food</option>
      {foods.map((f) => (
        <option key={f.id} value={f.id}>
          {f.name}
        </option>
      ))}
    </select>
  )
}