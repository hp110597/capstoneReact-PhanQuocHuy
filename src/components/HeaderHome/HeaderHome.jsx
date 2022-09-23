import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function HeaderHome() {
  const { userLogin } = useSelector((state) => state.userReducer);

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
            <span className="text-light fs-4 ms-2">Search</span>

            <img src="./img/image 8.png" className="ms-3" alt="..." />
            <span className="text-white">(1)</span>
            {renderLoginNavItem()}
            {/* <NavLink to="/login" className=" ms-2 text-light" style={{fontSize:16,fontWeight:'300',textDecoration:'none'}}>Login</NavLink> */}
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
