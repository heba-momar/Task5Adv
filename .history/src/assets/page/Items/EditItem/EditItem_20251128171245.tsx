import { useRef, useState, type FormEvent } from "react";
import FormItem from "../../../component/FormItem/FormItem"
import type { Input, item } from "../../../interfaces/interfaces"
import { useParams } from "react-router-dom";


const EditItem = () => {
    const { id } = useParams();
 const name = useRef<HTMLInputElement>(null!);
const price= useRef<HTMLInputElement>(null!);
 const image = useRef<HTMLInputElement>(null!);
  const [oldData, setOldData] = useState<item>();   
 const  inputs :Array<Input>=[
    {
      label:"Name",
       type:"text",
       placeholder:"Enter the product name", 
       name:"name" ,
       ref:name,
       defaultValue:oldData?.name
      },
        {
      label:"price",
       type:"number",
       placeholder:"Enter the product price", 
       name:"price" ,
       ref:price,
       defaultValue:oldData?.price
      },
    ]  
   const sendData=(event :FormEvent)=>{
   event.preventDefault()  
  }    
  return (
    <div>
        <FormItem TittelForm="Edit ITEM" inputs={inputs} image={image} initialImage={oldData?.image_url} onSubmit={sendData}/>   
    </div>
  )
}

export default EditItem
