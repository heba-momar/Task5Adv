import FormItem from "../../../component/FormItem/FormItem"
import type { Input } from "../../../interfaces/interfaces"


const EditItem = () => {
 const  inputs :Array<Input>=[
    {
      label:"Name",
       type:"text",
       placeholder:"Enter the product name", 
       name:"name" ,
      },
        {
      label:"Price",
       type:"number",
       placeholder:"Enter the product price", 
       name:"price" ,
      },
    ]    
  return (
    <div>
        <FormItem TittelForm="Edit ITEM" inputs={inputs}/>    
    </div>
  )
}

export default EditItem
