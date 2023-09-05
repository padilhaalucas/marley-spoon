import { CONTENTFUL_BASE_URL, SPACE_ID, ACCESS_TOKEN } from "./constants"
import fetcher from "./helpers/requests"

export async function getAllEntries() {
  const url = `${CONTENTFUL_BASE_URL}/${SPACE_ID}/entries?access_token=${ACCESS_TOKEN}`
  try {
    const { data } = await fetcher(url) ?? { data: {} }
    if (data) return data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getEntryByID(entryID: string): Promise<any> {
  const url = `${CONTENTFUL_BASE_URL}/${SPACE_ID}/entries/${entryID}?access_token=${ACCESS_TOKEN}`
  try {
    const { data } = await fetcher(url)
    if (data) return data  
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAssets(assetID: string): Promise<any> {
  const url = `${CONTENTFUL_BASE_URL}/${SPACE_ID}/assets/${assetID}?access_token=${ACCESS_TOKEN}`
  try {
    const { data } = await fetcher(url) ?? { data: { fields: {} } }
    const files = data?.fields?.file
    if (files) return files
  } catch (error) {
      throw new Error(error)
  }
}

export async function getAllRecipes() {
  const entries: any = await getAllEntries()
  
  const recipesPromises = (entries?.items || []).map(async (rawItem: any) => {
    if (rawItem?.sys?.contentType?.sys?.id !== 'recipe') return null
    
    const item = await getEntryByID(rawItem?.sys?.id)
    const title = item?.fields?.title
    const photoId = item?.fields?.photo?.sys?.id

    const asset = await getAssets(photoId)
    const imageSrc = asset?.url ? `https:${asset.url}` : null

    return {
      id: item?.sys?.id,
      title,
      imageSrc,
      rawItem
    }
  })

  const recipes = await Promise.all(recipesPromises)
  return recipes.filter(i => i !== null)
}

export async function getRecipeDetail(id: string) {
  const item = await getEntryByID(id)

  if (!item || item?.sys?.contentType?.sys?.id !== 'recipe') {
    return null
  }

  const title = item?.fields?.title
  const photoId = item?.fields?.photo?.sys?.id
  const tagsIDs = item?.fields?.tags?.map((tag: any) => tag?.sys?.id) || []
  const chefID = item?.fields?.chef?.sys?.id

  const fetchTasks: Promise<any>[] = [getAssets(photoId)]

  if (tagsIDs.length > 0) {
    fetchTasks.push(Promise.all(tagsIDs.map(getEntryByID)))
  } else {
    fetchTasks.push(Promise.resolve([]))
  }

  if (chefID) {
    fetchTasks.push(getEntryByID(chefID))
  } else {
    fetchTasks.push(Promise.resolve(null))
  }

  const [asset, tagDetails, chefDetail] = await Promise.all(fetchTasks)

  const imageSrc = asset?.url ? `https:${asset.url}` : null

  const tags = tagDetails.map(tag => tag?.fields?.name) || []
  const chef = chefDetail?.fields || null

  return {
    id: item?.sys?.id,
    title,
    imageSrc,
    description: item?.fields?.description,
    tags,
    chef,
  }
}


