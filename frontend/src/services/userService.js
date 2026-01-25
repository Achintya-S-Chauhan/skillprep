import apiClient from './api'

const userService = {
  getProfile: async () => {
    const response = await apiClient.get('/users/profile')
    return response.data
  },

  updateProfile: async (profileData) => {
    const response = await apiClient.put('/users/profile', profileData)
    return response.data
  },

  getStats: async () => {
    const response = await apiClient.get('/users/stats')
    return response.data
  },

  getSubmissions: async () => {
    const response = await apiClient.get('/users/submissions')
    return response.data
  }
}

export default userService
