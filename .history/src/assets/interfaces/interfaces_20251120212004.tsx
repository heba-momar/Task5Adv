export interface Input{
    label ?:string,
    placeholder :string,
    type :string,
    name:string
  
}
export interface FormProps{
 inputs:Array<Input>   
 descraption:string,
 des:string,
span:string,
link:string,
Tittel:string 
namebutton:string
formprops?:string
 dataHandle:(data :SignupIterface)=>void
}
export interface LoginInterface{
email:string,
password:string
}
export interface SignupIterface extends LoginInterface{
first_name:string,
last_name:string,
password_confirmation:string,
profile_image:File
}