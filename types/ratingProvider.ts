type RatingContextProps = {
  saveRating: (userID: string, recipeID: string, rating: number) => void;
  getRating: (userID: string, recipeID: string) => number;
}

type RatingsProviderProps = {
  children: React.ReactNode;
};

export type { RatingContextProps, RatingsProviderProps }