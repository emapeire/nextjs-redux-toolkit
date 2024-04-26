export default function Button({
  children,
  ...props
}: Readonly<
  {
    children: React.ReactNode
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
>) {
  return (
    <button
      {...props}
      className={`rounded border p-2 hover:opacity-50 transition-opacity duration-300 ease-in-out ${props.className}`}
    >
      {children}
    </button>
  )
}
