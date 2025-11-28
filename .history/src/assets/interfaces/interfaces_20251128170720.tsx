import type { ForwardedRef, RefObject } from "react";

export interface Input{
    label?:string,
    placeholder?:string,
    type :string,
    name:string
    col?: number; 
    value?:string,
    defaultValue?: string;
   ref?: RefObject<HTMLInputElement>;
}
export interface FormProps{
 inputs:Array<Input> 
  ref?:ForwardedRef<HTMLInputElement>  
 descraption:string,
 des:string,
span:string,
link:string,
Tittel:string 
namebutton:string
 dataHandle:(data :SignupIterface)=>void
}
export interface LoginInterface{
email:string,
password:string
}
export interface SignupIterface extends LoginInterface{
first_name:string,
last_name:string,
 user_name:string,
password_confirmation:string,
profile_image:File
}
export interface LinkItem {
    name: string;
    path: string;
    src?: string;
    alt?: string;
  }
  export interface items extends Input{
TittelItem:string
 } 
export interface item{
id:number
price:string
name:string
image_url:string
created_at:string
updated_at:string
 }
export interface SidebarProps {
  show: boolean;
  onClose?: () => void; 
}
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export interface ItemCardProps {
  id: number;
  productName: string;
  src: string; 
  onEdit?: () => void;
   onDeleteSuccess:()=> void
}
export interface ItemForm{
TittelForm:string;
 inputs:Array<Input> 
image: RefObject<HTMLInputElement>;
  onSubmit:(e: React.FormEvent) => void
   initialImage?: string; 
}