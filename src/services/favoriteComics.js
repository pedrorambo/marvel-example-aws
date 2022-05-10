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
 * @return {Promise<void>}
 */
export const setFavoriteComicService = async params => {
  const { data: response } = await api.post('/', { params })
  return response
}

/**
 * 
 * @param {{userId: string, comicId: string}} params
 * @return {Promise<void>}
 */
export const deleteFavoriteComicService = async params => {
  const { data: response } = await api.delete("/", { params })
  return response
}