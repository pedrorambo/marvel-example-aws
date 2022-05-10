import api from './persistenceApi'

/**
 * 
 * @param {string} params.userId User Id
 * @return {string[]} Ids of the favorite comics
 */
export const getFavoriteComicsService = async params => {
  const { data: response } = await api.get('/', { params })
  return response
}

/**
 * 
 * @param {string} params.userId User Id 
 * @param {string} params.comicId Comic Id 
 */
export const setFavoriteComicService = async params => {
  const { data: response } = await api.post('/', { params })
  return response
}

/**
 * 
 * @param {string} params.userId User Id 
 * @param {string} params.comicId Comic Id 
 */
export const deleteFavoriteComicService = async params => {
  const { data: response } = await api.delete("/", { params })
  return response
}