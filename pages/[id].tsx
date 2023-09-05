import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Container from '../components/container'
import Layout from '../components/layout'
import RecipeDetailView from '../components/recipe-detail-view'

import markdownToHtml from '../lib/markdownToHtml'
import { getRecipeDetail, getAllRecipes } from '../lib/api'
import { IRecipeDetail } from '../types'

export default function RecipeDetail({ recipe }: { recipe: IRecipeDetail }) {
  const router = useRouter()

  if (!router.isFallback && !recipe) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article>
              <Head>
                <title>{`${recipe.id} | Marley Spoon's Exercise`}</title>
              </Head>
              {recipe && <RecipeDetailView recipe={recipe} />}
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    id: string
  }
}

export async function getStaticProps({ params }: Params) {
  const recipe = await getRecipeDetail(params.id)
  const htmlDescription = await markdownToHtml(recipe.description || '')

  return {
    props: {
      recipe: { ...recipe, description: htmlDescription },
    },
  }
}

export async function getStaticPaths() {
  const recipes = await getAllRecipes()

  return {
    paths: recipes.map((recipe) => ({
      params: {
        id: recipe.id
      },
    })),
    fallback: true,
  }
}
