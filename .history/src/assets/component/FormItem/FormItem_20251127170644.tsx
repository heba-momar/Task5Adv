import { Form, FormGroup } from "react-bootstrap"
import type { ItemForm } from "../../interfaces/interfaces"
import BackButton from "../BackButton/BackButton"
import './FormItem.css'
import ImageUplood from "../ImageUplood/ImageUplood"
const FormItem = ({TittelForm,inputs}:ItemForm) => {  

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
                    <div className="flex-fill">
                      <ImageUplood/>    
                    </div>
              
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
