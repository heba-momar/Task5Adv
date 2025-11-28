import { useParams } from 'react-router-dom';
import BackButton from '../../../component/BackButton/BackButton'
import CustomImage from '../../../component/CustomImage/CustomImage'
import { useEffect, useState } from 'react';
import axios from 'axios';
import type { item } from '../../../interfaces/interfaces';
import './ShowItemIndex.css'
const ShowItemIndex = () => {
   const formatDate = (dateString: string | undefined) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const pad = (n: number) => (n < 10 ? "0" + n : n);
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
};   
 const { id } = useParams(); 
const [showItem, setShowItem] = useState<item>(); 
 useEffect(()=>{
    axios.get(`https://dashboard-i552.onrender.com/api/items/${id}`,{
    headers:{
        "Accept": "application/json",
       "Authorization": `Bearer ${localStorage.getItem("token")}`,   
    }   
   })
   .then(res=>{ console.log(res)
     setShowItem(res.data)
   })
   .catch(err=>console.log(err))
  
 },[])
   return (
   <div className='itemShowWapper container-lg'>
    <BackButton To='/dashbord/Items'/> 
    <h2 className='fw-semibold itemShowTitle lh-1 fs-60'>{showItem?.name}</h2>
    <div className='text-lg-center text-start'>
    {showItem &&(
       <CustomImage src={showItem?.image_url} fallbackSrc='/image/mobile.png'
       alt={showItem?.name}  className="itemShowImage"/>
    )}
    </div>
         <div className="d-flex justify-content-between align-items-center flex-wrap">
       <p className="fw-semibold itemShowPrice mb-0 lh-1 fs-60">
         Price:{" "}
         <span className="fw-medium itemShowSpan fs-40">{showItem?.price}$</span>
       </p>
       <p className="fw-semibold itemShowPrice mb-0 lh-1  fs-60">
         Added At:{" "}
         <span className="fw-medium itemShowSpan fs-40">{formatDate(showItem?.created_at)}
           </span>{" "} </p>
     </div>
     <p className="fw-semibold text-lg-center text-start itemShowPrice mb-0 lh-1 fs-60">
       Updated At:{" "}
       <span className="fw-medium itemShowSpan fs-40">  {formatDate(showItem?.updated_at)}
       </span>
     </p> 
   </div>
   )}
   export default ShowItemIndex 
