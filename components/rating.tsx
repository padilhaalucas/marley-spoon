import React, { useState } from 'react'
import { useRatings } from '../lib/providers/rating.context'

const RateRecipe = ({ userId, recipeId }) => {
  const { saveRating, getRating } = useRatings()
  const [selectedRating, setSelectedRating] = useState(getRating(userId, recipeId))

  const handleRating = (rating) => {
    setSelectedRating(rating)
    saveRating(userId, recipeId, rating)
  }

  return (
    <div className="my-4 hover:cursor-pointer hover:opacity-100">
      <h4 className="text-slate-700 text-2xl font-normal mb-2">Rate this recipe:</h4>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
        <span
          key={rating}
          className={`mr-1 hover:opacity-100 ${rating <= selectedRating ? '' : ' opacity-30'}`}
          onClick={() => handleRating(rating)}
        >
          👨‍🍳
        </span>
      ))}
    </div>
  )
}

export default RateRecipe
