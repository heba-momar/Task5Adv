import FormComp from "../component/formcomp/formcomp"
import type { Input } from "../interfaces/interfaces"
const SignIn = () => {
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
  return (
    <div>
      <FormComp descraption='Enter your credentials to access your account' des='Don’t have an account?' span=' Create one' Tittel='Sign In'
      link='/Signup' inputs={inputs} namebutton='SIGN IN'/>
    </div>
  )
}

export default SignIn
