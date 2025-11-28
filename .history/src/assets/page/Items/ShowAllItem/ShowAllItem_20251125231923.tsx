import { Row } from 'react-bootstrap'
import CardItem from '../../../component/CardItem/CardItem'
import PaginationCustom from '../../../component/PaginationCustom/PaginationCustom'
import './ShowAllItem.css'
import CutstomButton from '../../../component/CutstomButton/CutstomButton'
import SearchItem from '../../../component/SearchItem/SearchItem'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { item } from '../../../interfaces/interfaces'
import axios from 'axios'

const ShowAllItem = () => {
  const navigate=useNavigate()
    const [products, setProducts] = useState<Array<item>>([]);
    const [filteredProducts, setFilteredProducts] = useState<Array<item>>([]);
   const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(6);
  const totalPages = Math.ceil(filteredProducts.length / itemsToShow);
  const indexOfLastItem = currentPage * itemsToShow;
  const indexOfFirstItem = indexOfLastItem - itemsToShow;
    const currentProducts = filteredProducts.slice( indexOfFirstItem,indexOfLastItem);
    const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
    const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setItemsToShow(8); 
    } else if (width >= 992) {
      setItemsToShow(6); 
    } else if(width >= 576){
      setItemsToShow(4);
    } else {
      setItemsToShow(2);
    }         
  };
  useEffect(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);
    const fetchProducts = async () => {
    // function to fetch Item from backend
    try {
      const res = await axios.get( "https://dashboard-i552.onrender.com/api/items",
        {
          headers: {
           "Accept":"application/json",
          "Authorization":`Bearer ${localStorage.getItem("token")}`,  
          },
        }
      );
     setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  /* */
 
  // Search for products by name
  const Search = (query: string) => {
    setCurrentPage(1);

    if (!query.trim()) {
      //if search box empty return all items
      setFilteredProducts(products);
    } else {
      //check for all items if contain word found in search box to return item match with it
      const results = products.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };
  return (
  <div className="items-page-content d-flex flex-column align-items-center container-lg pt-4">
         {/* search box */}
         <SearchItem onSearch={Search} classExtra="pb-3 pb-xl-4"/>
           {/* Button Add */}
           <CutstomButton name="ADD NEW PRODUCT" classExtra="p-3 align-self-lg-end align-self-center mb-32 fs-14" 
           onClick={()=>navigate("add")}/>

        <div className="items-container mb-80">
        <Row className="g-xxl-4 g-xl-3 g-2 d-grid grid-cols-4">
            {currentProducts.length === 0 ?(
               <p>No products found</p>
            ):(currentProducts.map((item)=>{
              return(
                <CardItem key={item.id}
                  id={item.id} productName={item.name}
                  src={item.image_url}
                  onEdit={() => navigate(`edit/${item.id}`)}
                  onDeleteSuccess={fetchProducts}
                  /> 
              )
            })) 
          }
           </Row>
              {/* pagination component */}
     {totalPages > 0 && (
      <div className="pt-5 d-flex flex-column align-items-center container-lg ">
             <PaginationCustom
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      )}
      </div>
          </div>
  )
}

export default ShowAllItem
