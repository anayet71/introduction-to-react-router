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
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Comments from './components/Comments/Comments.jsx';
import CommentDetails from './components/CommentDetails/CommentDetails.jsx';


const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },{
        path: '/users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: '/comments',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>

      },
      {
        path: '/comments/:commentsId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentsId}`),
        element: <CommentDetails></CommentDetails>
      }
    ] 
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
