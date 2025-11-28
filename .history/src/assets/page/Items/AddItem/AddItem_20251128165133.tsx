import { useEffect, useRef, type FormEvent } from "react"
import FormItem from "../../../component/FormItem/FormItem"
import type { Input } from "../../../interfaces/interfaces"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddItem = () => {
   const name = useRef<HTMLInputElement>(null!);
    const price = useRef<HTMLInputElement>(null!);
    const image = useRef<HTMLInputElement>(null!); 
    const navigate=useNavigate()
 const  inputs :Array<Input>=[{
      label:"Name",
       type:"text",
       placeholder:"Enter the product name", 
       name:"name" ,
       ref:name
      },
        {
      label:"Price",
       type:"number",
       placeholder:"Enter the product price", 
       name:"price" ,
       ref:price
      },
    /*{
     label:"image",
       type:"file",
       name:"image" ,
        ref:image
      }*/ ] 
   axios.post("https://dashboard-i552.onrender.com/api/items",{
   name: name?.current?.value,
   price: price?.current?.value,
   image: image?.current?.files?.[0],
   },{
    headers:{
     "Accept": "application/json",
     "Authorization": `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "multipart/form-data",
    }
   })
   .then(res=>{console.log(res)
    alert("add products succfuly")
    navigate("/dashbord/Items")
  })
   .catch(err=>{console.log(err)
    alert("fild add item")
   })
      const sendData=(event :FormEvent)=>{
 event.preventDefault()  
}  
  return (
    <div>
      <FormItem TittelForm="ADD NEW ITEM" inputs={inputs} onSubmit={sendData} image={image}/>
    </div>
  )
}

export default AddItem
