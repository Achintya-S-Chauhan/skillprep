import { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import authService from '../services/authService'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const decoded = jwtDecode(token)
        if (decoded.exp * 1000 > Date.now()) {
          setUser(decoded)
        } else {
          logout()
        }
      } catch (error) {
        logout()
      }
    }
    setLoading(false)
  }

  const login = async (credentials) => {
    const response = await authService.login(credentials)
    localStorage.setItem('token', response.token)
    const decoded = jwtDecode(response.token)
    setUser(decoded)
    return response
  }

  const register = async (userData) => {
    const response = await authService.register(userData)
    localStorage.setItem('token', response.token)
    const decoded = jwtDecode(response.token)
    setUser(decoded)
    return response
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
