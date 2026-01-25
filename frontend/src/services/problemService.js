import apiClient from './api'

const problemService = {
  getAllProblems: async (filters = {}) => {
    const response = await apiClient.get('/problems', { params: filters })
    return response.data
  },

  getProblemById: async (id) => {
    const response = await apiClient.get(`/problems/${id}`)
    return response.data
  },

  submitSolution: async (problemId, solution) => {
    const response = await apiClient.post(`/problems/${problemId}/submit`, solution)
    return response.data
  },

  getRecommendations: async () => {
    const response = await apiClient.get('/problems/recommendations')
    return response.data
  },

  getProblemsByDomain: async (domain) => {
    const response = await apiClient.get(`/problems/domain/${domain}`)
    return response.data
  }
}

export default problemService
