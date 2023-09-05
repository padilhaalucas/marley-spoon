type Chef = {
  name: string
}

export interface IRecipePreview {
  id: string
  imageSrc: string
  title: string
}

export interface IRecipeDetail extends IRecipePreview {
  tags: string[]
  chef: Chef
  description: string
}

export type {
  Chef
}
