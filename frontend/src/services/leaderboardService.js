import apiClient from './api'

const leaderboardService = {
  getGlobalLeaderboard: async (limit = 100) => {
    const response = await apiClient.get('/leaderboard', { params: { limit } })
    return response.data
  },

  getDomainLeaderboard: async (domain, limit = 100) => {
    const response = await apiClient.get(`/leaderboard/domain/${domain}`, { params: { limit } })
    return response.data
  },

  getUserRank: async (userId) => {
    const response = await apiClient.get(`/leaderboard/user/${userId}`)
    return response.data
  }
}

export default leaderboardService
