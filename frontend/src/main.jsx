import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import {routeTree} from './routing/routeTree.js'
import store from './store/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'

export const queryClient = new QueryClient()
const router = createRouter({
  routeTree,
  context:{
    queryClient,
    store
  }
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
       <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
  </StrictMode>,
)
