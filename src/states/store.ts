import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/states/slices/counter-slice'
import { userApi } from './services/user-api'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStateMiddleware } from './middlewares'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, persistStateMiddleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
