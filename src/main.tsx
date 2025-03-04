import { StrictMode } from 'react'
import { router } from './App.tsx'
import { createRoot } from 'react-dom/client'
import { store } from './app/Store.ts'
import './index.css'

// import App from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
