import { UserState } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com'
  }),
  endpoints: (builder) => ({
    getUser: builder.query<UserState[], null>({
      query: () => 'users'
    }),
    getUserById: builder.query<UserState[], { id: UserState['id'] }>({
      query: ({ id }) => `users/${id}`
    })
  })
})

export const { useGetUserQuery, useGetUserByIdQuery } = userApi
