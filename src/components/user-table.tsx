'use client'

import {
  useGetUserByIdQuery,
  useGetUserQuery
} from '@/states/services/user-api'

export default function UserTable() {
  const { data, error, isLoading, isFetching } = useGetUserQuery(null)

  if (isLoading || isFetching)
    return (
      <p className='flex justify-start items-center h-full font-mono font-bold'>
        Loading...
      </p>
    )
  if (error)
    return (
      <p className='flex justify-start items-center h-full font-mono font-bold text-red-500'>
        Some error has ocurred
      </p>
    )

  return (
    <div className='grid grid-cols-3 gap-4'>
      {data?.map((user) => (
        <div
          key={user.id}
          className='bg-neutral-800 p-4 border rounded-md font-mono'
        >
          <p className='font-bold text-lg'>{user.name}</p>
          <p className='text-neutral-400 text-sm'>{user.username}</p>
          <p className='text-neutral-400 text-sm'>{user.email}</p>
        </div>
      ))}
    </div>
  )
}
