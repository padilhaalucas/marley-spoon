import Container from '../components/container'
import RecipesList from '../components/recipes-list'
import Banner from '../components/banner'
import Layout from '../components/layout'
import { getAllRecipes } from '../lib/api'
import Head from 'next/head'
import { IRecipePreview } from '../types'

export default function Index({ recipes }: { recipes: IRecipePreview[] }) {
  return (
    <>
      <Layout hasFooter>
        <Head>
          <title>{`Marley Spoon's Exercise`}</title>
        </Head>
        <Container>
          <Banner />
          <h1>Got {recipes.length} recipes</h1>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const recipes = await getAllRecipes()

  return { props: { recipes } }
}
