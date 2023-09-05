import { IRecipePreview } from '../types'
import CoverImage from './cover-image'
import Link from 'next/link'

const RecipePreview = ({ recipe }: { recipe: IRecipePreview }) => (
  <div>
    <div className="mb-5">
      <CoverImage id={recipe?.id} title={recipe?.title} src={recipe?.imageSrc} />
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Link
        as={recipe?.id}
        href={"/[id]"}
        className="hover:underline"
      >
        {recipe?.title}
      </Link>
    </h3>
  </div>
)

export default RecipePreview
