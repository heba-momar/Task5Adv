import axios from "axios";
import { useState } from "react";
import { Button, Image, Nav } from "react-bootstrap"
import { NavLink, useNavigate } from 'react-router-dom'
import type { SidebarProps } from "../../interfaces/interfaces";
import { NavBarData } from "../../data/NavBarData";
import ModalCustom from "../ModalCustom/ModalCustom";
import CustomImage from "../CustomImage/CustomImage";
import './SidBar.css'
const SidBar = ({show,onClose}:SidebarProps) => {
 const [showModal, setShowModal] = useState(false);
const handleShow = () => setShowModal(true);
const handleHide = () => setShowModal(false);
  const navigate=useNavigate()
const SignOut=()=>{
  axios.post("https://dashboard-i552.onrender.com/api/logout",null,{
      headers:{
        "Accept": "application/json",
      "  Authorization": `Bearer ${localStorage.getItem("token")}`,  
      }
    })
    .then(res=>{ console.log(res)
     alert("LogOut successful!")
       setShowModal(false);
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userImage");
      navigate("/")
    })
        .catch(err => { console.log(err)});
  }
  return (
   <div className={`sidebar d-flex flex-column align-items-center gap-xxl-5 gap-xl-4 gap-3  position-fixed h-100 top-0 start-0 overflow-hidden ${!show ? 'd-none' : 'd-block'}`}>
      {onClose && (
        <button onClick={onClose}
          className="btn-close-sidebar btn bg-orange rounded-circle my-3 me-3 position-absolute top-0 end-0 rounded-circle text-white fs-1 p-0" >
          &times;
        </button>
      )}  
      {/* compang logo */}
      <img src='/image/LogoNav.svg'  alt="FocalX Logo"></img>
      {/* Profile Section */}
        <div className="user-info pt-5 text-center">
      <CustomImage src={localStorage.getItem("userImage") || ""}
          fallbackSrc="/image/UserIcon.png"alt="user Image"
          className="rounded-circle mb-4 bg-white"width={'110'} height={'123'}/>
      <h4 className='fw-bold'>{localStorage.getItem("userName")}</h4>
      </div> 
      {/* Navigation Menu */}
      <Nav  defaultActiveKey="/dashbord"
        className=" flex-column align-items-stretch gap-xxl-4 gap-xl-3 gap-2 overflow-y-auto w-100 flex-grow-1 flex-nowrap pt-5">
          {NavBarData.map((item,index)=>{
            return(
            <NavLink key={index}
            to={item.path}
            className={({ isActive }) => `fs-14 text-decoration-none text-dark rounded py-lg-2 py-1 px-4 d-flex align-items-center gap-2 mx-auto text-decoration-none ${ isActive ? "bg-orange" : ""}`}> 
            <img src={item.src} alt={item.alt} ></img>
             <span className="sidebar-link fw-medium ">{item.name}</span>
            </NavLink> 
            )
          })}
      </Nav>
            {/* Logout Button */}
        <Button onClick={handleShow} variant="link"
          className="logout-btn py-lg-2 py-1 px-3 d-flex align-items-center gap-lg-4 gap-3 fw-medium text-decoration-none mt-auto fs-14">  Logout
          <Image src="/image/logout.svg" alt="logout Logo" />
        </Button>
        {/* Modal for logout confirm */}
        <ModalCustom
          show={showModal}
          onHide={handleHide}
          body={
          <p className="text-center fw-semibold fs-22">Are you sure you want to logout?</p>
          }
          onSubmit={SignOut}
          submitText="Yes"
          cancelText="No"
        />
     
    </div>
  )
}

export default SidBar
