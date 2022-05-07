import api from './api'

export const searchComicsService = async params => {
  const { data: response } = await api.get('/comics', { params })
  return response
}

export const findComicService = async comicId => {
  const { data: response } = await api.get(`/comics/${comicId}`)
  return response
}

export const findComicCharactersService = async comicId => {
  const { data: response } = await api.get(`/comics/${comicId}/characters`)
  return response
}
