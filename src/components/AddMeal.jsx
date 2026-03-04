import { useState } from "react"
import FoodSelector from "./FoodSelector"
import { addMeal } from "../services/mealService"

export default function AddMeal({ userId }) {
  const [foodId, setFoodId] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!foodId) {
      setError("Please select a food")
      return
    }
    const { data, error } = await addMeal(userId, foodId, quantity)
    if (error) {
      console.error("add meal error", error)
      setError("Failed to add meal")
    } else {
      setFoodId("")
      setQuantity(1)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-6">
      <FoodSelector onSelect={setFoodId} />
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
        className="border px-2 py-1 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Meal
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}