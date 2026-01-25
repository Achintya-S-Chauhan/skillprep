import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: null,
  stats: null,
  submissions: [],
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload
    },
    setStats: (state, action) => {
      state.stats = action.payload
    },
    setSubmissions: (state, action) => {
      state.submissions = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { setProfile, setStats, setSubmissions, setLoading, setError } = userSlice.actions
export default userSlice.reducer
