import Counter from '@/components/counter'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Next.js Redux Toolkit</h1>
      <Counter />
    </main>
  )
}
