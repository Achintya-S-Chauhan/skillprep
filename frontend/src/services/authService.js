import apiClient from './api'

const authService = {
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials)
    return response.data
  },

  register: async (userData) => {
    const response = await apiClient.post('/auth/register', userData)
    return response.data
  },

  logout: () => {
    localStorage.removeItem('token')
  },

  getCurrentUser: async () => {
    const response = await apiClient.get('/auth/me')
    return response.data
  }
}

export default authService
