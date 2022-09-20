import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { getProductApi } from "../../redux/reducers/productReducer";

export default function Home() {

    const {arrProduct} = useSelector((state)=>state.productReducer);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

  //call api 
  const getAllProductApi =()=>{
    const actionThunk = getProductApi('ab')
    dispatch(actionThunk)
  }

  useEffect(()=>{
    getAllProductApi()
  },[])
    

  const renderProduct =() =>{
    return arrProduct.map((item,index)=>{
      return  <div className="col-4 my-5 px-5" key={index}>
      <div className="card">
        <div className="card-top">
        <img src={item.image}  alt={item.name} />
        <p style={{fontSize:24,fontWeight:'300'}}>{item.name}</p>
        <p  style={{fontSize:20,fontWeight:'300',height:100}}>{item.shortDescription}</p>
        </div>
        <div className="card-body row text-white">
        
          <NavLink className="col-6" to={`/detail/${item.id}`}>
            Buy now
          </NavLink>
          <p className="col-6 text-dark">{item.price}$</p>
        </div>
      </div>
    </div>
    })
  }

  return (
    <div className="home-page">
      <div className="swiper mb-5">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <section className="d-flex justify-content-between align-items-center" style={{padding:'0 100px'}}>
              <img src="./img/image 5.png" alt="Shoe banner" />
              <div className="text-start">
                <h2 className="">Product name</h2>
                <p className=" mb-4">Product description .....</p>
                <button className="btn btn-warning px-4 text-white">Buy now</button>
              </div>
            </section>
          </div>
        
        </div>
        <div
          className="arrow-left "
          onclick="slideTo('left')"
        >
          <img src="./img/Polygon 2.png" alt />
        </div>
        <div
          className="arrow-right "
          onclick="slideTo('right')"
        >
          <img src="./img/Polygon 1.png" alt />
        </div>
      </div>
      <div className="feature pt-5">
       <div className="row row1">
       <h3 className="text-start col-6">Product Feature</h3>
       </div>
       <div className="row row2">
        {renderProduct()}
        </div>
       </div>
      </div>
    
  )
}
