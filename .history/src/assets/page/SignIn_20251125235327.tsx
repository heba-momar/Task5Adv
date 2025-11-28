import { useEffect, useState  } from "react"
import FormComp from "../component/Formcomp/FormComp"
import type { Input, SignupIterface } from "../interfaces/interfaces"
import { useNavigate } from "react-router-dom"
const SignIn = () => {
    const navigate= useNavigate()
    const [data,setdata]=useState({
    email:"", 
    password:""
  })
    useEffect(()=>{
    if(data.email!=""){
      console.log(data)
  fetch("https://dashboard-i552.onrender.com/api/login",{
    method:"POST",
    headers:{
      "Accept":"application/json",
      "content-Type":"application/json",
    },
    body:JSON.stringify(data)
  })
   .then(res=>res.json())
    .then(res=>{
      console.log(res) 
       alert("LogIn successful!")
      localStorage.setItem("token",res.token)
       localStorage.setItem("userName", res.data.data.user.user_name);
        localStorage.setItem("userImage", res.data.data.user.profile_image_url);
       navigate("/dashbord/Items")
    } )
     .catch(err=>console.log(err))
    }
  },[data])
    const  inputs :Array<Input>=[
    {
  label:"email",
   type:"email",
   placeholder:"Enter your email", 
   name:"email" },  
    {
  label:"password",  
  type:"password", 
  placeholder:"Enter your password",
  name:"password"
  }]
  const dataHandle=(data:SignupIterface)=>{
   setdata(data)
  }
  return (
    <div>
      <FormComp descraption='Enter your credentials to access your account' des='Don’t have an account?' span=' Create one' Tittel='Sign In'
      link='/Signup' inputs={inputs} namebutton='SIGN IN' dataHandle={dataHandle}/>
    </div>
  )
}

export default SignIn
