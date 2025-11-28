import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './assets/page/Auth'
import SignIn from './assets/page/SignIn'
import Signup from './assets/page/Signup'
const routes= createBrowserRouter([
  {
 path:'/',
 element :<Auth/>,
 children:[
  {
  path:'',
  element:<SignIn/>
 },
   {
  path:'/Signup',
  element:<Signup/>
 },

]
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={routes}/>
  </StrictMode>,
)
