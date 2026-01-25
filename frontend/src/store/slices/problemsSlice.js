import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  problems: [],
  currentProblem: null,
  filters: {
    domain: 'all',
    difficulty: 'all',
    tags: []
  },
  loading: false,
  error: null
}

const problemsSlice = createSlice({
  name: 'problems',
  initialState,
  reducers: {
    setProblems: (state, action) => {
      state.problems = action.payload
    },
    setCurrentProblem: (state, action) => {
      state.currentProblem = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  }
})

export const { setProblems, setCurrentProblem, setFilters, setLoading, setError } = problemsSlice.actions
export default problemsSlice.reducer
