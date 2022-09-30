import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { history } from "../..";
import { submitOrderApi } from "../../redux/reducers/productReducer";
import { getProfileApi } from "../../redux/reducers/userReducer";
import { ACCESS_TOKEN, getStore } from "../../util/tools";

export default function Carts() {
  const { productOrder } = useSelector((state) => state.productReducer);
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const emailUser = userLogin?.email;
 

 


  const submitOrderApi= async () => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/order",
        method: "POST",
        data: { ...productOrder, emailUser },
      });
      console.log(result);
      alert(result.data.content);
      dispatch(getProfileApi())
    } catch (err) {
      console.log(err);
    }
  };

  const renderOrderItem = () => {
    return [productOrder]?.map((item, index) => {
      return (
        <div key={index}>
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
                    src={item.image}
                    alt="avatar"
                    style={{ width: 50, height: 50 }}
                  />
                </td>
                <td>{item.name}</td>
                <td className="modify-quantity">
                  <button>+</button>
                  <span
                    style={{ backgroundColor: "#D9D9D9" }}
                    className="mx-2 px-4"
                  >
                    {item.quantity}
                  </span>
                  <button>-</button>
                </td>
                <td>{item.price}</td>
                <td>{(item.price * item.quantity).toLocaleString()}</td>
                <td className="modify-action">
                  <button className="edit">EDIT</button>
                  <button className="delete">DELETE</button>
                </td>
              </tr>
            </tbody>
          </table>
       
        </div>
      );
    });
  };
  return (
    <div className="carts-page my-5">
      <div className="container">
        <h1 className="text-start">Carts</h1>
        {renderOrderItem()}
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
