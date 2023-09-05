import CoverImage from './cover-image'
import type { IRecipeDetail } from '../types'
import RateRecipe from './rating'

const RecipeDetailView = ({ recipe }: { recipe: IRecipeDetail }) => {
  const tagColors = {
    'vegan': 'bg-green-600 text-white',
    'healthy': 'bg-blue-600 text-white',
    'gluten free': 'bg-yellow-600 text-white'
  }
  const { tags, chef, title, imageSrc, description }: IRecipeDetail = recipe

  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-16">
        <div className='flex flex-col'>
          <h3 className="mb-4 text-4xl lg:text-5xl font-bold">
            {title}
          </h3>
          { chef &&
            <>
              <p className='text-slate-700 text-xl font-light italic'>
                By: <span className='font-bold'>{chef.name}</span>
              </p>
              <div className='my-4 md:my-6 flex flex-wrap'>
                { tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`mr-3 py-1 px-3 rounded-lg ${tagColors[tag] ||
                      'bg-gray-300 text-black'}`
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          }
        </div>
        { description &&
          <div className=' bg-slate-200 p-4 h-fit shadow-md rounded-xl border-2 border-slate-400'>
            <h4 className='text-slate-700 text-4xl font-normal mb-2'>
              Description
            </h4>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        }
      </div>
      <div className="mb-8 md:mb-16">
        <RateRecipe userId={'lucas'} recipeId={recipe.id} />
        <CoverImage title={title} src={imageSrc} />
      </div>
    </section>
  )
}

export default RecipeDetailView
