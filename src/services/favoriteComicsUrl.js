import axios from "axios";

const API_URL_FILE_NAME = "api-url.txt"

/**
 * 
 * @return {Promise<string>} Favorite comics API URL
 * @throws {Error}
 */
async function doGetFavoriteComicsUrl() {
  const { host, protocol } = window.location
  const { data } = await axios.get(`${protocol}//${host}/${API_URL_FILE_NAME}`)
  return data
}

/**
 * 
 * @return {Promise<string | null>} Favorite comics API URL
 */
export const getFavoriteComicsUrl = async () => {
  try {
    return await doGetFavoriteComicsUrl()
  } catch (error) {
    console.error(error)
    return null
  }
}