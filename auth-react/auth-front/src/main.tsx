import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.tsx';
import Signup from './routes/Signup.tsx';
import Dashboard from './routes/Dashboard.tsx';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import { AuthProvider } from './auth/AuthProvider.tsx';


const router = createBrowserRouter([
  {
  path: "/",
  element:<Login />,
},
{
  path: "/Signup",
  element:< Signup />,
},
{
  path: "/",
  element: < ProtectedRoute />,
  children: [
    {
      path: "Dashboard",
      element: <Dashboard />
    }
  ]
},
]);


ReactDOM.createRoot(document.getElementById('root')as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router ={router}/>
    </AuthProvider>
   
  </React.StrictMode>,
)
