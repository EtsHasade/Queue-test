import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router as AppRouter } from './routes'
import 'normalize.css'
import './assets/style/main.scss'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={AppRouter} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
