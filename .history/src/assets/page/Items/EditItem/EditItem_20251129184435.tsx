import { useEffect, useRef, useState, type FormEvent } from "react";
import FormItem from "../../../component/FormItem/FormItem"
import type { Input, item } from "../../../interfaces/interfaces"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const EditItem = () => {
    const { id } = useParams();
    const navigate=useNavigate()
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
      },]
    useEffect(() => {
        getItem();
      }, []);
      var getItem=()=>{
           axios.get(`https://dashboard-i552.onrender.com/api/items/${id}`, {
            headers: {
            "Accept": "application/json",
           "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => {
                console.log("Fetched item:", res.data);
                setOldData(res.data);

            })
            .catch((err) => {
                console.error("Error fetching item:", err);
            });
               }
      
 axios.post(`https://dashboard-i552.onrender.com/api/items/${id}`,{
    name: name?.current?.value,
    price: price?.current?.value,
     image: image?.current?.files?.[0],
      _method: "PUT",
     },
       {
        headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
         "Content-Type": "multipart/form-data",
                    },
                }
            )
   .then(res=>{  console.log(res)
   // alert("edit product susscufly")
    navigate("/dashbord/Items") 
   })
   //.catch(err=>console.log(err))
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
