import FormItem from "../../../component/FormItem/FormItem"
import type { Input } from "../../../interfaces/interfaces"


const AddItem = () => {
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
            {   
      label:"Profile Image" ,   
      type:"file", 
      name:"profile_image",
      },  
    ]   
  return (
    <div>
      <FormItem TittelForm="ADD NEW ITEM" inputs={inputs}/>
    </div>
  )
}

export default AddItem
