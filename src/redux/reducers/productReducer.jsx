import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrProduct: [],
  productDetail: [],
  productOrder: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    getProductAction: (state, action) => {
      const arrProduct = action.payload;
      state.arrProduct = arrProduct;
    },
    getProductDetailAction: (state, action) => {
      //Bước 4:Sau khi nhận được dữ liệu từ dispatch
      const productDetail = action.payload;
      state.productDetail = productDetail;
    },
    addProductToCartAction: (state, action) => {
      const productOrder = action.payload;
      state.productOrder = productOrder;
    },
  },
});

export const {
  getProductAction,
  getProductDetailAction,
  addProductToCartAction,
} = productReducer.actions;

export default productReducer.reducer;

//-------------------------action api----------------

export const getProductApi = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
      });
      const action = getProductAction(result.data.content);
      console.log(action);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

export const getProductDetailApi = (id) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        method: "GET",
      });
      const action = getProductDetailAction(result.data.content);

      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};

// export const submitOrderApi = () => {
//   return async (dispatch) => {
//     try {
//       let result = await axios({
//         url: "https://shop.cyberlearn.vn/api/Users/order",
//         method: "POST",
//       });
//       alert(result.data.message);
//     } catch (err) {
//       console.log(err);
//       alert(err.response?.data.message);
//     }
//   };
// };
