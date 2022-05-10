import api from './favoriteComicsApi'

/**
 * 
 * @param {{userId: string}} params
 * @return {Promise<string[]>} Ids of the favorite comics
 */
export const getFavoriteComicsService = async params => {
  const { data: response } = await api.get('/', { params })
  return response
}

/**
 * 
 * @param {{userId: string, comicId: string}} params
 * @return {Promise<boolean>} If the comic is favorite
 */
export const isFavoriteComicService = async params => {
  const favoriteComicIds = await getFavoriteComicsService(params)
  return favoriteComicIds.includes(params.comicId)
}

/**
 * 
 * @param {{userId: string, comicId: string}} params
 * @return {Promise<void>}
 */
export const setFavoriteComicService = async params => {
  await api.post('/', { params })
}

/**
 * 
 * @param {{userId: string, comicId: string}} params
 * @return {Promise<void>}
 */
export const deleteFavoriteComicService = async params => {
  await api.delete("/", { params })
}