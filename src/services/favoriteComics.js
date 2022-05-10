import api from './favoriteComicsApi'
import { getFavoriteComicsUrl } from './favoriteComicsUrl'

const {
  REACT_APP_FAVORITE_COMICS_API_URL
} = process.env

/**
 * 
 * @return {Promise<void>}
 */
const updateFavoriteComicsApiBaseUrl = async () => {
  api.defaults.baseURL = await getFavoriteComicsUrl() || REACT_APP_FAVORITE_COMICS_API_URL
}

/**
 * 
 * @param {{userId: string}} params
 * @return {Promise<string[]>} Ids of the favorite comics
 */
export const getFavoriteComicsService = async params => {
  await updateFavoriteComicsApiBaseUrl()
  const { data: response } = await api.get('/', { params })
  return response
}

/**
 * 
 * @param {{userId: string, comicId: string}} params
 * @return {Promise<boolean>} If the comic is favorite
 */
export const isFavoriteComicService = async params => {
  await updateFavoriteComicsApiBaseUrl()
  const favoriteComicIds = await getFavoriteComicsService(params)
  return favoriteComicIds.includes(params.comicId)
}

/**
 * 
 * @param {{userId: string, comicId: string}} params
 * @return {Promise<void>}
 */
export const setFavoriteComicService = async params => {
  await updateFavoriteComicsApiBaseUrl()
  await api.post('/', { params })
}

/**
 * 
 * @param {{userId: string, comicId: string}} params
 * @return {Promise<void>}
 */
export const deleteFavoriteComicService = async params => {
  await updateFavoriteComicsApiBaseUrl()
  await api.delete("/", { params })
}