import Counter from '@/components/counter'
import UserTable from '@/components/user-table'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24 space-y-4'>
      <h1 className='text-4xl font-bold'>Next.js Redux Toolkit</h1>
      <Counter />
      <UserTable />
    </main>
  )
}
