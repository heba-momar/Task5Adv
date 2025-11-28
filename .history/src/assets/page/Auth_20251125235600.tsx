import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Auth = () => {
 /* const navigate=useNavigate()
  useEffect(()=>{
if(localStorage.getItem("token")){
navigate("/dashbord/Items")
}
 },[])*/
  return (
    <div className='bg-warning min-vh-100 d-flex justify-content-center align-items-center'>
      <Outlet/>
    </div>
  )
}

export default Auth
