import { Middleware } from '@reduxjs/toolkit'

export const persistStateMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action)
    localStorage.setItem('__state__', JSON.stringify(store.getState()))
  }
