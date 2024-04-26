'use client'

import Button from './button'

export default function Counter() {
  return (
    <>
      <h2 className='font-mono font-bold text-2xl'>Counter</h2>
      <div className='flex flex-row justify-center items-center space-x-4 font-mono'>
        <Button>Increment</Button>
        <Button>Decrement</Button>
        <Button>Reset</Button>
      </div>
    </>
  )
}
