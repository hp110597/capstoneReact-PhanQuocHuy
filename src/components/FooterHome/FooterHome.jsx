import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterHome() {
  return (
    <div>
      <footer>
        <div className="top">
          <div className="footer-top  py-4">
            <div className="row">
              <div className=" text-start ps-5 col-4">
                <h3 style={{ fontSize: 20, fontWeight: "700" }}>GET HELP</h3>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    Nike
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    Adidas
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    Contact
                  </NavLink>
                </p>
              </div>
              <div className="text-start ps-5 border-start col-4">
                <h3 style={{ fontSize: 20, fontWeight: "700" }}>ORDERS</h3>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    About
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    Contact
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    Help
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    Phone
                  </NavLink>
                </p>
              </div>
              <div className="text-start ps-5 border-start col-4">
                <h3 style={{ fontSize: 20, fontWeight: "700" }}>REGISTER</h3>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    Register
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-dark"
                    style={{
                      textDecoration: "none",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    to="#"
                  >
                    Login
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom  py-3" style={{backgroundColor:'#D9D9D9',fontSize:20,fontWeight:400}}>
          <p>
            © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn
            Khải.
          </p>
        </div>
      </footer>
    </div>
  );
}
