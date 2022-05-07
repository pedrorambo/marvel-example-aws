import axios from 'axios'
import CryptoJS from 'crypto-js'

const {
  REACT_APP_PUBLIC_KEY,
  REACT_APP_PRIVATE_KEY
} = process.env

const timestamp = new Date().getTime()
const hash = CryptoJS.MD5(timestamp + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY).toString()

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'
})

api.interceptors.request.use(request => {
  request.params = { 
    ...request.params, 
    apikey: REACT_APP_PUBLIC_KEY, 
    ts: timestamp, 
    hash 
  }

  return request
})
 
export default api