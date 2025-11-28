import './FormComp.css'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import type { FormProps } from '../../interfaces/interfaces';
import type { FormEvent } from 'react';
const FormComp = ({inputs,descraption,des,link,span,Tittel,namebutton,dataHandle}:FormProps) => {
  let data={}
const sendData =(event :FormEvent<HTMLFormElement>)=> {
event.preventDefault()
console.log(data)
dataHandle(data)
}
  return (
    <Container>
         <div className='borders rounded-4 box-shadwaa bg-white p-5 w-100'>
        <div className='d-flex justify-content-center '>
          <img src='/image/Logo.svg' ></img> 
        </div>
         <h1 className='text-dark d-flex justify-content-center pt-4 '> {Tittel}</h1>
         <p className='text d-flex justify-content-center'>{descraption}</p>
          <Form onSubmit={(event)=>sendData(event)}  >
            <Row>
              {inputs.map((input,index)=>{ 
                 return(
          <Col md={input.col||12} key={index}>
           <Form.Group  className="mb-3" controlId={`formInput${index}`}>
        <Form.Label>{input.label}</Form.Label>
        <Form.Control type={input.type} placeholder={input.placeholder}
        onChange={event=>{data= {...data ,[input.name]  :event.target.value } }}
        />
      </Form.Group>
      </Col>
          )
         })}
       </Row>   
<Button variant="warning text-light mx-auto w-90 d-block mt-3" type='submit' >{namebutton}</Button>

</Form>  
    <p className='text d-flex justify-content-center mt-3'>{des}<Link to={link} className='text-warning'>{span}</Link>
    </p>
      </div> 
    </Container>
  )
}

export default FormComp
