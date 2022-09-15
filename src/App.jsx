import { Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Chat from './pages/Chat'
import globalStyles from './styles/global'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <Chat />
    </QueryClientProvider>
  )
}

export default App
