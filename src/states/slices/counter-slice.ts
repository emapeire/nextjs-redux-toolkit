import { CounterState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_VALUE: CounterState = {
  value: 0
}

const initialState: CounterState = (() => {
  const persistedState = localStorage.getItem('__state__')
  return persistedState ? JSON.parse(persistedState).counter : DEFAULT_VALUE
})()

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
      state.value = DEFAULT_VALUE.value
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer
