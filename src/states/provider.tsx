import { Provider } from 'react-redux'
import { store } from './store'

export function StateProvider({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return <Provider store={store}>{children}</Provider>
}
