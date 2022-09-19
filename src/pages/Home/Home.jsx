import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const {arrProduct} = useSelector((state)=>state.productReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    
     

    

  return (
    <div>
      <div className="swiper">
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
      <div className="feature ">
       <div className="row">
       <h3 className="text-start col-6">Product Feature</h3>
       </div>
       <div className="row">
        {/* {renderProduct()} */}
        <div className="col-4 mt-2">
            <div className="card">
                <img src="./" alt="" />
            </div>

        </div>
       </div>
      </div>
    </div>
  );
}
