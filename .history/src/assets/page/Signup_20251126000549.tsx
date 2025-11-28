import { useEffect, useState } from "react"
import FormComp from "../component/Formcomp/FormComp"
import type { Input, SignupIterface } from "../interfaces/interfaces"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Signup = () => {
  const navigate= useNavigate()
       const [data,setdata]=useState({
        first_name:"",
        last_name:"",
        user_name:"",
        email:"", 
         password:"",
         password_confirmation:"",
         profile_image:{},
      })
      
           const  inputs :Array<Input>=[
          {
      label:"Name",
       type:"text",
       placeholder:"First Name", 
       name:"first_name" ,
       col:6
      },
      {
       type:"text",
       placeholder:"Last Name", 
       name:"last_name" ,  
       col:6
      },
     /* {
      label:"UserName",
       type:"text",
       placeholder:"User Name", 
       name:" user_name" ,  
      },*/
        {
      label:"Email",
       type:"email",
       placeholder:"Enter your email", 
       name:"email" 
      },  
          {
      label:"Password",  
      type:"password", 
      placeholder:"Enter your password",
      name:"password",
      col:6
      },
      {   
      type:"password", 
      placeholder:"Re-enter your password",
      name:"password_confirmation",
      col:6
      },  
        {   
      label:"Profile Image" ,   
      type:"file", 
      name:"profile_image",
      },   
    ]
    useEffect(()=>{
        if(data.first_name!=""){   
       const user_name=data.first_name.toUpperCase()+data.last_name.toUpperCase() 
       const newData={...data,user_name} 
    axios.post("https://dashboard-i552.onrender.com/api/register",newData,{
        headers:{
            "Accept":"application/json",
            "Content-Type":"multipart/form-data"
        }
    })
    .then(res=>{
        console.log(res) 
         alert("create account successful!")
        localStorage.setItem("token",res.data.data.token)
       localStorage.setItem("userName", res.data.data.user.user_name);
        localStorage.setItem("userImage", res.data.data.user.profile_image_url);
        navigate("/dashbord/Items")
    })
     .catch(err=>console.log(err))
        }
     
    },[data])
    const dataHandle=(data:SignupIterface)=>{
       setdata(data)
      }
  return (
    <div>
     <FormComp inputs={inputs} descraption="Fill in the following fields to create an account." Tittel="Sign up"
      des="Do you have an account? " span="Sign in" link="/" namebutton="SIGN UP" dataHandle={dataHandle}/>
    </div>
  )
}

export default Signup
