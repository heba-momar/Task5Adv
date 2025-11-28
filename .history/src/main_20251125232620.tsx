import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './assets/page/Auth'
import SignIn from './assets/page/SignIn'
import Signup from './assets/page/Signup'
import Dashbord from './assets/page/Dashbord/Dashbord';
import Items from './assets/page/Items/Items';
import ShowAllItem from './assets/page/Items/ShowAllItem/ShowAllItem';
import AddItem from './assets/page/Items/AddItem/AddItem';
import EditItem from './assets/page/Items/EditItem/EditItem';
import ShowItemIndex from './assets/page/Items/ShowItemIndex/ShowItemIndex';
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
},
{
  path:"/dashbord",
  element:<Dashbord/>,
  children:[{
   path:"Items",
   element: <Items/>, 
   children:[{
    path:"",
    element:<ShowAllItem/>
         /* loader :async()=>{
     let response=await fetch("https://dashboard-i552.onrender.com/api/items",{
      headers:{
      "Authorization": `Bearer ${localStorage.getItem("token")}`,   
      }
     })
     if(response.ok){
      return await response.json()
     }
     throw new Response("item not found",{status:404})
    }*/
   },
   {
   path:"show/:id",
   element:<ShowItemIndex/>
   },
   {
    path:"add",
    element:<AddItem/>
   },
   {
    path:"edit/:id",
    element:<EditItem/>
   }
  ] 
  }]
}
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={routes}/>
  </StrictMode>,
)
