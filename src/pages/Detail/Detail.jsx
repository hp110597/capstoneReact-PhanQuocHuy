import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { getProductDetailApi } from '../../redux/reducers/productReducer'

export default function Detail() {
  const {productDetail} = useSelector(state=>state.productReducer)
  const {userLogin} = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()
  const params = useParams()

  const [quantity,setQuantity] = useState(1)
  console.log(productDetail);
 


  useEffect(()=>{
    let {id} = params
    const actionThunk = getProductDetailApi(id)
    dispatch(actionThunk)
  },[params.id])


  const addToCart=()=>{
      const action ={
        type:'productReducer/addProductToCartAction',
        payload:{...productDetail,quantity}
      }
      console.log(action);
      dispatch(action)
  }
  

  return (
    <div className='detail-page'>
      <div className=" detail-top my-5 d-flex">
        <div className=" col-left ms-5">
          <div className="detail-img">
          <img src={productDetail.image} style={{width:220,height:200}} alt="..." />
          </div>
        </div>
        <div className=" col-right text-start">
          <h1>{productDetail.name}</h1>
          <p className='description'>{productDetail.description}</p>
          <h3>Available size</h3>
          <button className='size'>38</button>
          <button className='size' >39</button>
          <button className='size'>40</button>
          <button className='size'>41</button>
          <button className='size'>42</button>
          <p className='text-danger mt-4 fs-3 fw-bold'>{productDetail.price}$</p>
          <button className='modify me-2' onClick={()=>{
            setQuantity(quantity+1)
          }}>+</button>{quantity} <button className='modify ms-2' onClick={()=>{
            if (quantity>1){
              setQuantity(quantity-1)
            }
          }}>-</button>
          <br />
          <button className='addToCart mt-3' onClick={()=>{
            addToCart()
          }}>Add to cart</button>
        </div>
      </div>
      <div className="detail-bottom ">
        <h3>-Relate Product</h3>
        <div className="content">
          {productDetail.relatedProducts?.map((item,index)=>{
            return <div className="item my-5 " key={index}  >
            <div className="card" >
              <div className="card-top">
              <img src={item.image}  alt={item.name} style={{width:220,height:200}} />
              <p style={{fontSize:24,fontWeight:'300'}}>{item.name}</p>
              <p className='description' style={{height:150}}>{item.description.length>100?item.description.substring(0,100)+'...':item.description}</p>
              </div>
              <div className="card-body row text-white">
              
                <NavLink className="col-6" to={`/detail/${item.id}`}>
                  Buy now
                </NavLink>
                <p className="col-6 text-dark">{item.price}$</p>
              </div>
            </div>
          </div>
          })}
        </div>

      </div>
    </div>
  )
}
