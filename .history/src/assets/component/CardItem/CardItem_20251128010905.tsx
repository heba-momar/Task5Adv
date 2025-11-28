import   { useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import CutstomButton from '../CutstomButton/CutstomButton'
import CustomImage from '../CustomImage/CustomImage'
import ModalCustom from '../ModalCustom/ModalCustom'
import type { ItemCardProps } from '../../interfaces/interfaces'
import axios from 'axios'
import './CardItem.css'
const CardItem = ({id,productName,src,onEdit}:ItemCardProps) => {
  const item =useLoaderData()
   const navigate=useNavigate()
      const [showModal, setShowModal] =useState(false);
  const handleShow = () => setShowModal(true);
  const handleHide = () => setShowModal(false);
  const handelDelet=()=>{
   axios.delete(`https://dashboard-i552.onrender.com/api/items/${id}`,{
  headers:{
       "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`, 
  }
 })
   .then(res=>{console.log(res)
      navigate("/dashbord/Items") 
    alert("delet product sussfuly")
  
  })  
  .catch(err=>console.log(err))      
    }
  return (
    <div
      className="grid-card image-hover-container position-relative cursor-pointer d-inline-block overflow-hidden rounded-4">
          <CustomImage  src={src}  alt={productName}
          fallbackSrc="/image/mobile.png"
          className="w-100 h-100 object-contain"
        />    
      {/* show when hover Item*/}
      <div
        className="overlay d-flex flex-column align-items-center justify-content-center w-100 h-100 top-0 start-0 position-absolute"
        onDoubleClick={() => navigate(`show/${id}`)}
      >
        <Link to={`show/${id}`} className="text-decoration-none text-dark">
          <p className="item-name pb-4 m-0 lh-1 fs-3 fw-medium text-center">
            {productName}
          </p>
        </Link>
        
        <div className="button-group d-flex gap-2">
          <CutstomButton name={"Edit"} classExtra="btn-edit text-white" onClick={onEdit} />
          <CutstomButton name={"Delete"} classExtra="btn-delete text-white" onClick={handleShow} />
        </div>
      </div>
      {/* Modal for delete Item */}
      <ModalCustom  show={showModal} onHide={handleHide}
        body={
          <p className="text-center fw-semibold fs-22">
            Are you sure you want to delete the product?
          </p>
        }
        onSubmit={handelDelet}
        submitText="Yes"
        cancelText="No"
      />
      </div>
  )
}

export default CardItem
