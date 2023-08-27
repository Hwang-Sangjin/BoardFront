import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import LoginPage from './pages/LoginPage.tsx'
import Signup from './pages/SignupPage.tsx'
import './index.css'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from 'recoil'



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path:'/signup',
    element: <Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
    <RouterProvider router={router} />
    </RecoilRoot>
    

  </React.StrictMode>,
)
