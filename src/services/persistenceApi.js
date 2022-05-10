import axios from 'axios'

const {
  REACT_APP_PERSISTENCE_URL
} = process.env

const api = axios.create({
  baseURL: REACT_APP_PERSISTENCE_URL
})

api.interceptors.request.use(request => {
  request.params = {
    ...request.params,
  }

  return request
})

export default api