import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: "/about",
    element: <div>Hello About world!</div>,
  },
  {
    path: "/contact",
    element: <div>Hello contact world!</div>,
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
