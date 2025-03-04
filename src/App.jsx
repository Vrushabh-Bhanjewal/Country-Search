import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Country from './Pages/Country'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import AppLayout from './Components/Layouts/AppLayout'
import { Children } from 'react'
import ErrorPage from './Pages/ErrorPage'

function App() {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<AppLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Country',
          element:<Country/>
        },
        {
          path:'/Contact',
          element:<Contact/>
        }
      ]
    },
        
  ])
  return <RouterProvider router={route}></RouterProvider>

}

export default App
