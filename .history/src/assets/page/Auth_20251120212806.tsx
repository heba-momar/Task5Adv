import { Outlet } from "react-router-dom"

const Auth = () => {
  return (
    <div className='bg-warning min-vh-100 d-flex justify-content-center align-items-center'>
      <Outlet/>
    </div>
  )
}

export default Auth
