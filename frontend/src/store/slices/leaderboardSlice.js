import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rankings: [],
  userRank: null,
  loading: false,
  error: null
}

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    setRankings: (state, action) => {
      state.rankings = action.payload
    },
    setUserRank: (state, action) => {
      state.userRank = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { setRankings, setUserRank, setLoading, setError } = leaderboardSlice.actions
export default leaderboardSlice.reducer
