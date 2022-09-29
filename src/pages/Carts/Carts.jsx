import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitOrderApi } from "../../redux/reducers/productReducer";

export default function Carts() {
  const { productOrder } = useSelector((state) => state.productReducer);
  const { userLogin } = useSelector((state) => state.userReducer);
  // const dispatch = useDispatch();
  // const productCart = { ...productOrder };
  const emailUser = userLogin.email
  console.log(emailUser);

  // dispatch(submitOrderApi({...productOrder,emailUser}));
  const submitOrderApi =async()=>{
    try{
      const result = await axios({
        url:'https://shop.cyberlearn.vn/api/Users/order',
        method:'POST',
        data:{...productOrder,emailUser}
      })
      alert(result.data.message)
      console.log(result);
    }catch(err){
      console.log(err);
    }

  }

  console.log(productOrder);
  return (
    <div className="carts-page my-5">
      <div className="container">
        <h1 className="text-start">Carts</h1>
        <table className="table mt-5">
          <thead style={{ backgroundColor: "#D9D9D9" }}>
            <tr>
              <th>
                <i
                  class="fa-solid fa-square-check"
                  style={{ color: "#6200EE" }}
                ></i>
              </th>
              <th>id</th>
              <th>img</th>
              <th>name</th>
              <th>quantity</th>
              <th>price</th>
              <th>total</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i
                  class="fa-solid fa-square-check"
                  style={{ color: "#6200EE" }}
                ></i>
              </td>
              <td>1</td>
              <td>
                <img
                  src={productOrder.image}
                  alt="avatar"
                  style={{ width: 50, height: 50 }}
                />
              </td>
              <td>{productOrder.name}</td>
              <td className="modify-quantity">
                <button>+</button>
                <span
                  style={{ backgroundColor: "#D9D9D9" }}
                  className="mx-2 px-4"
                >
                  {productOrder.quantity}
                </span>
                <button>-</button>
              </td>
              <td>{productOrder.price}</td>
              <td>
                {(productOrder.price * productOrder.quantity).toLocaleString()}
              </td>
              <td className="modify-action">
                <button className="edit">EDIT</button>
                <button className="delete">DELETE</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="submit-order">
          <button
            onClick={() => {
              submitOrderApi();
            }}
          >
            SUBMIT ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
