import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../redux/reducers/userReducer";

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //Khi trang vừa load lên thì gọi api => (dispatch lại getProfile api đã xâu dựng)
    dispatch(getProfileApi());
  }, []);

  return (
    <>
      <div className="profile-page ">
        <div className="row row1">
          <div className="col-3">
            <h3 className="text-start ps-5">Profile</h3>
          </div>
        </div>
        <div className="row row2">
          <div className="col-2">
            <div className="avatar">
              <img
                src={userLogin?.avatar}
                alt="..."
                className="rounded-circle p-1 w-100"
              />
            </div>
          </div>
          <div className="col-5">
            <div className="form-group">
              <p>Email</p>
              <input
                className="from-control"
                type="email"
                placeholder="email"
                name="email"
                // onChange={frm.handleChange}
                // onBlur={frm.handleBlur}
              />
              {/* {frm.errors.email ? (
              <p className="text-danger mb-3">{frm.errors.email}</p>
            ) : (
              ""
            )} */}
            </div>
            <div className="form-group">
              <p>Phone</p>
              <input
                className="from-control"
                type="text"
                inputMode="numeric"
                placeholder="phone"
                name="phone"
                // onChange={frm.handleChange}
                // onBlur={frm.handleBlur}
              />
              {/* {frm.errors.phone?<p className="text-danger">{frm.errors.phone}</p>:''} */}
            </div>
          </div>
          <div className="col-5">
            <div className="form-group">
              <p>Name</p>
              <input
                className="from-control"
                type="text"
                placeholder="name"
                name="name"
                // onChange={frm.handleChange}
                // onBlur={frm.handleBlur}
              />
              {/* {frm.errors.name?<p className="text-danger">{frm.errors.name}</p>:''} */}
            </div>
            <div className="form-group ">
              <p>Password</p>
              <input
                className="from-control"
                id="password"
                type="password"
                placeholder="password"
                name="password"
                // onChange={frm.handleChange}
                // onBlur={frm.handleBlur}
                // value={values.password}
              />

              {/* <i
                class="fa fa-eye"
                id="togglePassword"
                onClick={() => {
                  const type =
                    document.querySelector("#password").getAttribute("type") ===
                    "password"
                      ? "text"
                      : "password";
                  document
                    .querySelector("#password")
                    .setAttribute("type", type);
                  // toggle the eye / eye slash icon
                  document
                    .querySelector("#togglePassword")
                    .classList.toggle("fa fa-eye-slash");
                }}
              ></i> */}
            </div>
            {/* {frm.errors.password ? (
                <p className="text-danger mb-3">{frm.errors.password}</p>
              ) : (
                ""
              )} */}
            <div class="form-group gender mt-5 d-flex ">
              <span>Gender</span>
              <label className="description" for="male">
                <input
                  type="radio"
                  value="true"
                  checked="checked"
                  name="radio"
                  id="male"
                />
                <span class="checkmark"></span>
                <p>Male</p>
              </label>

              <label class="description" for="female">
                <input type="radio" value="false" name="radio" id="female" />
                <span class="checkmark"></span>
                <p>Female</p>
              </label>
              <button className="ms-auto">Update</button>
            </div>
          </div>
        </div>
      </div>
      <div className="order-history">
        <div className="row">
          <div className="col-2">
            <h1>Order History</h1>
          </div>
          <div className="col-2">
            <h2>Favourite</h2>
          </div>
        </div>
        <div className="order-detail my-5">
          {userLogin?.ordersHistory?.map((orderItem) => {
            return (
              <div className="mt-5" style={{margin:"0 150px"}} >
                <p className="text-start">+ Orders have been placed on 09 - 19 - 2020</p>
                <table className="table text-start">
                  <thead style={{backgroundColor:"#D9D9D9"}}>
                    <tr>
                      <th>id</th>
                      <th>img</th>
                      <th>name</th>
                      <th>price</th>
                      <th>quantity</th>
                      <th>total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orderItem.orderDetail?.map((item, index) => {
                      console.log(index);
                      return (
                        <tr key={index}>
                          <td style={{width:'15%'}} >{index}</td>
                          <td>
                            <img
                              src={item.image}
                              alt="..."
                              width={50}
                              height={50}
                              style={{ objectFit: "cover" }}
                            />
                          </td>
                          <td style={{width:'30%'}}>{item.name}</td>
                          <td style={{width:'15%'}}>{item.price}</td>
                          <td style={{width:'15%'}}>{item.quantity}</td>
                          <td style={{width:'15%'}}>{item.price*item.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
