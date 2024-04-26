import { CounterState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_VALUE: CounterState = {
  value: 0
}

// This function will handle checking the environment and loading state appropriately
const getInitialState = (): CounterState => {
  if (typeof window !== 'undefined') {
    // Ensure we are in the browser
    const persistedState = localStorage.getItem('__state__')
    if (persistedState) {
      try {
        const loadedState = JSON.parse(persistedState).counter
        return loadedState || DEFAULT_VALUE // Return loaded state or default if undefined
      } catch (error) {
        console.error('Error parsing state from localStorage:', error)
      }
    }
  }
  return DEFAULT_VALUE // Default initial state if not in browser or if no state in localStorage
}

const initialState: CounterState = getInitialState()

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    reset: (state) => {
      state.value = DEFAULT_VALUE.value // Always reset to default value
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer
