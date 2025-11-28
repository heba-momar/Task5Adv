import { Form, FormControl, FormGroup } from "react-bootstrap"
import type { ItemForm } from "../../interfaces/interfaces"
import BackButton from "../BackButton/BackButton"
import './FormItem.css'
import CustomImage from "../CustomImage/CustomImage"
import { useRef, useState } from "react"
const FormItem = ({TittelForm,inputs}:ItemForm) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef=useRef<HTMLInputElement>(null)
  const handleclick=()=>{
    fileInputRef.current?.click()
      }   
   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
    // onImageSelect(file)
     setPreview(URL.createObjectURL(file))
 
    }
  };   

  return (
    <div className=" formWrapper container-lg ">
      <BackButton To="/dashbord/Items"/>
      <h2 className="formTitle fw-semibold fs-60"> {TittelForm}</h2>
      <Form>
        <div className="d-flex gap-5 align-items-start flex-wrap flex-lg-nowrap">
            <div className="d-flex flex-column formFields flex-fill">
             {inputs.map((input,index)=>{
                return(
          <FormGroup className="mb-3" controlId={`formInput${index}`}>
                 <Form.Label className='pb-3 fs-1 mb-0'>{input.label}</Form.Label>
                  {input.type==='file'  ?(
                    <>
                   <input type="file"  accept="image/*" ref={fileInputRef}className="d-none" onChange={handleImageChange}/> 
                   <div onClick={handleclick}>
                   {preview? (
                    <CustomImage src={preview} alt="preview" fallbackSrc="/image/Uploadicon.svg"/>
                   ):(
                 <img src="/image/Uploadicon.svg" alt="" className="uploadIcon"/>
                   )} 
                   </div>

       
                    </>
                  ):(
                  <Form.Control type={input.type} placeholder={input.placeholder} className='rounded-1 w-75'></Form.Control> 
                  )}
          </FormGroup>     
                )
             })}
            </div>

        </div>
      </Form>
    </div>
  )
}

export default FormItem
