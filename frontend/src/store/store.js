import { configureStore } from '@reduxjs/toolkit'
import problemsReducer from './slices/problemsSlice'
import leaderboardReducer from './slices/leaderboardSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    problems: problemsReducer,
    leaderboard: leaderboardReducer,
    user: userReducer,
  },
})
