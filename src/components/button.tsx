export default function Button({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <button className='rounded border p-2 hover:opacity-50 transition-opacity duration-300 ease-in-out'>
      {children}
    </button>
  )
}
