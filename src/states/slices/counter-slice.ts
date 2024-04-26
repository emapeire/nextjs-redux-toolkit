import { CounterState } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
