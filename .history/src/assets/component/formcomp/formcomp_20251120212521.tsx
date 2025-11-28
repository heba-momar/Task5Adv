import { Container, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './formcomp.css'

const formcomp = () => {
  return (
    <Container>
         <div className='borders rounded-4 box-shadwaa bg-white p-5 w-100'>
        <div className='d-flex justify-content-center '>
          <img src='/image/Logo.svg' ></img> 
        </div>
         <h1 className='text-dark d-flex justify-content-center pt-4 '>sihhhhh</h1>
         <p className='text d-flex justify-content-center'>nnnnn</p>
          <Form  >
           <Form.Group className="mb-3" controlId='1'>
        <Form.Label> Email</Form.Label>
        <Form.Control type="email" placeholder="enter your email"
       />
      </Form.Group>
<Button variant="warning text-light m-auto w-90 d-block" type='submit' >siginin</Button>
</Form>  
    <p className='text d-flex justify-content-center'>hhhhh<Link to={"/"} className='text-warning'>bbbb</Link> </p>
      </div> 
    </Container>
  )
}

export default formcomp
