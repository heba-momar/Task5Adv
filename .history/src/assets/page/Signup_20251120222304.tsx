import { useState } from "react"
import FormComp from "../component/formcomp/formcomp"
import type { Input, SignupIterface } from "../interfaces/interfaces"
const Signup = () => {
       const [data,setdata]=useState({
        first_name:"",
        last_name:"",
        email:"", 
         password:"",
         password_confirmation:"",
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
    ]
   const dataHandle=(data:SignupIterface)=>{
       setdata(data)
      }
  return (
  <FormComp inputs={inputs} descraption="Fill in the following fields to create an account." Tittel="Sign up"
      des="Do you have an account? " span="Sign in" link="/" namebutton="SIGN UP" dataHandle={dataHandle}/>
  )
}

export default Signup
