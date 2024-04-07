import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json'
  }
})
export const login = async (params: {username: string; password: string}): Promise<unknown> => {
  const { data } = await API.post('/login', { params })
  return data
}
export const register = async (params?: unknown): Promise<unknown> => {
  const { data } = await API.post('/register', { params })
  return data
}
export const about = async (params?: unknown): Promise<unknown> => {
  const { data } = await API.get('/about', { params })
  return data
}
