import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { RatingContextProps, RatingsProviderProps } from '../../types/ratingProvider'

const RatingContext = createContext<RatingContextProps | undefined>(undefined)

export const useRatings = () => {
  const context = useContext(RatingContext)
  if (!context) {
    throw new Error("useRatings must be used within a RatingsProvider")
  }
  return context
}

export const RatingsProvider: React.FC<RatingsProviderProps> = ({ children }) => {
  const [ratings, setRatings] = useState<Record<string, Record<string, number>>>({})

  // Carrega ratings do localStorage quando o componente é montado
  useEffect(() => {
    const storedRatings = localStorage.getItem('ratings')
    if (storedRatings) {
      setRatings(JSON.parse(storedRatings))
    }
  }, [])

  // Salva ratings no localStorage sempre que ele é atualizado
  useEffect(() => {
    localStorage.setItem('ratings', JSON.stringify(ratings))
  }, [ratings])

  const saveRating = (userID: string, recipeID: string, rating: number) => {
    const newRatings = {
      ...ratings,
      [userID]: {
        ...(ratings[userID] || {}),
        [recipeID]: rating,
      },
    }
    setRatings(newRatings)
    localStorage.setItem('ratings', JSON.stringify(newRatings))
  }

  const getRating = (userID: string, recipeID: string) => {
    return ratings[userID]?.[recipeID] || 0
  }

  return (
    <RatingContext.Provider value={{ saveRating, getRating }}>
      {children}
    </RatingContext.Provider>
  )
}
