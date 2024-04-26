import { Middleware } from '@reduxjs/toolkit'

export const persistStateMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action)
    if (typeof window !== 'undefined') {
      // Check if the environment is the browser
      localStorage.setItem('__state__', JSON.stringify(store.getState()))
    }
  }
