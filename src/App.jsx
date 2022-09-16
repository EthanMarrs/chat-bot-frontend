import { Global } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Chat from './pages/Chat'
import globalStyles from './styles/global'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Chat />
    </QueryClientProvider>
  )
}

export default App
