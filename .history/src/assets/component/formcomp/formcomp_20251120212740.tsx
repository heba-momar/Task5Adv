import './formcomp.css'
import { Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import type { FormProps } from '../../interfaces/interfaces';

const formcomp = ({inputs,descraption,des,link,span,Tittel,namebutton}:FormProps) => {
  return (
    <Container>
         <div className='borders rounded-4 box-shadwaa bg-white p-5 w-100'>
        <div className='d-flex justify-content-center '>
          <img src='/image/Logo.svg' ></img> 
        </div>
         <h1 className='text-dark d-flex justify-content-center pt-4 '> {Tittel}</h1>
         <p className='text d-flex justify-content-center'>{descraption}</p>
          <Form  >
         {inputs.map((input,index)=>{
          return(
           <Form.Group key={index} className="mb-3" controlId={`formInput${index}`}>
        <Form.Label>{input.label}</Form.Label>
        <Form.Control type={input.type} placeholder={input.placeholder}/>
      </Form.Group>
          )
         })}
<Button variant="warning text-light m-auto w-90 d-block" type='submit' >{namebutton}</Button>
</Form>  
    <p className='text d-flex justify-content-center'>{des}<Link to={link} className='text-warning'>{span}</Link> </p>
      </div> 
    </Container>
  )
}

export default formcomp
