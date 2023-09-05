import { IRecipePreview } from '../types'
import RecipePreview from './recipe-preview'

const RecipesList = ({ recipes }: { recipes: IRecipePreview[] }) => (
  <section>
    <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
      {recipes?.length} <span className='font-normal'>found recipes</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-16 mb-32">
      {recipes?.map((recipe) => (
        <RecipePreview key={recipe.title} recipe={recipe}/>
      ))}
    </div>
  </section>
)

export default RecipesList
