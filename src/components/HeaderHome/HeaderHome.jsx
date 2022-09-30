import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { history } from "../..";
import { ACCESS_TOKEN, getStore } from "../../util/tools";

export default function HeaderHome(props) {
  const { userLogin } = useSelector((state) => state.userReducer);
  const {productOrder} = useSelector(state=>state.productReducer)



  console.log(productOrder.length);

  const renderOrdered = (()=>{
    if (productOrder.length!==0){
      return <span className="text-danger fs-4">(1)</span>
    }
    return ""
  })
    
  // console.log(typeof productOrder);
  const renderNotifyOrder =()=>{
    const accessToken = getStore(ACCESS_TOKEN)
    if(!accessToken && productOrder.length==0){
      console.log(1);
      alert("Token không hợp lệ, vui lòng đăng nhập lại");
    history.push("/login");  
    }
    else if(productOrder.length==0){
      alert('Chưa có sản phẩm trong giỏ hàng, vui lòng chọn sản phẩm')
      history.push('/')
    }else{
    history.push('/carts')

    }
    
  }

  const renderLoginNavItem = () => {
    if (userLogin == null) {
      return (
        <NavLink
          to="/login"
          className=" ms-2 text-light"
          style={{ fontSize: 16, fontWeight: "300", textDecoration: "none" }}
        >
          Login
        </NavLink>
      );
    }
    return (
      <NavLink
        to="/profile"
        className=" ms-2 text-light"
        style={{ fontSize: 16, fontWeight: "300", textDecoration: "none" }}
      >
        Hello {userLogin.name} !
      </NavLink>
    );
  };

  return (
    <div>
      <header>
        <div
          className="header d-flex justify-content-between py-2 "
          style={{ backgroundColor: "#000" }}
        >
          <div className="logo ms-3">
            <img src="./img/image 3.png" alt="logo" />
          </div>
          <div className="menu me-5">
            <i className="fa fa-search text-light fs-4"></i>
            <NavLink style={{textDecoration:"none"}} to='/search' className="text-light fs-4 ms-2">Search</NavLink>
            <img src="./img/image 8.png" className="ms-3" alt="..." onClick={()=>{
              renderNotifyOrder()
            }} />
            {renderOrdered()}
            {/* <span className="text-white">()</span> */}
            {renderLoginNavItem()}
            <NavLink
              to="/register"
              className=" ms-3 me-4 text-light"
              style={{
                fontSize: 16,
                fontWeight: "300",
                textDecoration: "none",
              }}
            >
              Register
            </NavLink>
          </div>
        </div>
      </header>
      <section className="navbar d-flex justify-content-start ">
        <NavLink
          to="/"
          className="ms-4 me-3 text-dark"
          style={{ fontSize: 20, fontWeight: "400", textDecoration: "none" }}
        >
          Home
        </NavLink>
        <NavLink
          to="#"
          className="me-3 text-dark"
          style={{ fontSize: 20, fontWeight: "400", textDecoration: "none" }}
        >
          Men
        </NavLink>
        <NavLink
          to="#"
          className="me-3 text-dark"
          style={{ fontSize: 20, fontWeight: "400", textDecoration: "none" }}
        >
          Woman
        </NavLink>
        <NavLink
          to="#"
          className="me-3 text-dark"
          style={{ fontSize: 20, fontWeight: "400", textDecoration: "none" }}
        >
          Kid
        </NavLink>
        <NavLink
          to="#"
          className="text-dark"
          style={{ fontSize: 20, fontWeight: "400", textDecoration: "none" }}
        >
          Sport
        </NavLink>
      </section>
    </div>
  );
}
