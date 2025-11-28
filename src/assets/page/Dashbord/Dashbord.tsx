import { useEffect, useState } from 'react'
import SidBar from '../../component/SidBar/SidBar'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashbord = () => {
   const [showSidebar, setShowSidebar] = useState(true);
 const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
useEffect(() => {
   if (!localStorage.getItem("token")) navigate("/");
   const handleResize = () => {
     const mobile = window.innerWidth < 992;
     setIsMobile(mobile);
     if (mobile) setShowSidebar(false);
     else setShowSidebar(true);
   };
   window.addEventListener("resize", handleResize);
   handleResize();
   return () => window.removeEventListener("resize", handleResize);
 }, []);    
  return (
    <>
   <div className="d-flex min-vh-100">
   {/* Sidebar */}
   {(showSidebar || !isMobile) && (
     <SidBar show={showSidebar} onClose={() => setShowSidebar(false)} />
   )}
   <div className="flex-grow-1 bg-grey16 vh-100 px-64" style={{ marginLeft: isMobile ? "0" : "270px" }} >
     <Outlet/>  
   </div>
 </div>    
    </>
  )
}

export default Dashbord
