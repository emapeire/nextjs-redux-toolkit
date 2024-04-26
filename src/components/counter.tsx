'use client'

import Button from './button'
import { useAppSelector, useAppDispatch } from '@/states/hooks'
import { increment, decrement, reset } from '@/states/slices/counter-slice'

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <h2 className='font-mono font-bold text-2xl'>Counter: {count}</h2>
      <div className='flex flex-row justify-center items-center space-x-4 font-mono'>
        <Button className='bg-green-500' onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Button className='bg-red-500' onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button className='bg-blue-500' onClick={() => dispatch(reset())}>
          Reset
        </Button>
      </div>
    </>
  )
}
