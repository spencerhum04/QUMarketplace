import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
import Landing from './pages/landing/landing'
import Login from './pages/login/login'
import Register from './pages/signup/signup'
import Profile from './pages/profile/profile'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/profile',
    element: <Profile />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </StrictMode>,
)
