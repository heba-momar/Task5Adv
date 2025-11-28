import { Col, Form, FormGroup, Row } from "react-bootstrap"
import type { ItemForm } from "../../interfaces/interfaces"
import BackButton from "../BackButton/BackButton"
import './FormItem.css'
import ImageUplood from "../ImageUplood/ImageUplood"
import CutstomButton from "../CutstomButton/CutstomButton"
const FormItem = ({TittelForm,inputs,onSubmit}:ItemForm) => {  

  return (
    <div className=" formWrapper container-lg ">
      <BackButton To="/dashbord/Items"/>
      <h2 className="formTitle fw-semibold fs-60"> {TittelForm}</h2>
      <Form onSubmit={onSubmit}>
        <div className="d-flex gap-5 align-items-start flex-wrap flex-lg-nowrap">
            <div className="d-flex flex-column formFields flex-fill">
             {inputs.map((input,index)=>{
                return(
          <FormGroup className="mb-3" controlId={`formInput${index}`}>
                 <Form.Label className='pb-3 fs-1 mb-0'>{input.label}</Form.Label>
                {/*  {input.type==='file'  ?(
                    <div className="flex-fill">
                      <ImageUplood addNewItem="imageBox rounded-1"/>    
                    </div>
                  ):(
                  <Form.Control type={input.type} placeholder={input.placeholder} className='rounded-1 w-75'></Form.Control> 
                  )} */ } 
            <Form.Control type={input.type} placeholder={input.placeholder} className='rounded-1 w-75'defaultValue={input.value} ref={input.ref}/>
          </FormGroup>     
                )
             })}
            </div>
              {/*photo Uplood */}
          {/*<div className="flex-fill">
            <Form.Label className="label-image pb-3 fw-medium text-grey lh-1 ls-normal fs-1 mb-0">Image</Form.Label>
            <ImageUplood  addNewItem="imageBox rounded-1"/>                  
                    </div>*/ }
        </div> 
        {/*Button save */}
           <Row>
      <Col className="d-flex justify-content-center">
        <CutstomButton name={"Save"} classExtra="p-3 fs-2 submitBtn mb-4" size="lg" type="submit" />
          </Col>
             </Row>
      </Form>
    </div>
  )
}

export default FormItem
