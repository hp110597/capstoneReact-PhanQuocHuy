import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/tools";
import { history } from "../../index";
const initialState = {
  // userSignup:[],
  userLogin: getStoreJson(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction:(state,action)=>{
      state.userLogin = action.payload
    }
  },
});

export const {getProfileAction} = userReducer.actions;

export default userReducer.reducer;

export const signupApi = (values) => {
  return async () => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: values,
      });
      alert(result.data.message );
      // dispatch(result.data.content)
    } catch (err) {
      console.log(err);
      alert(err.response?.data.message);
    }
  };
};

export const loginApi = (values) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: values,
      });
      setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      alert(result.data.message);
      history.push("/profile");
      dispatch(getProfileApi())

    } catch (err) {
      console.log(err);
      alert(err.response?.data.message);
    }
  };
};


export const getProfileApi = (accessToken=getStore(ACCESS_TOKEN)) =>{
  return async (dispatch) =>{
      try {
          const result = await axios({
            url:'https://shop.cyberlearn.vn/api/Users/getProfile',
            method:'POST',
            headers:{
              Authorization:'Bearer ' +accessToken
            }
          })

            //Lấy được thông tin profile đưa lên redux
            const action = getProfileAction(result.data.content)
            dispatch(action)

            //Lưu vào storage để reload userlogin có thể lấy default từ store để không cần đăng nhập
            setStoreJson(USER_LOGIN,result.data.content)
      }catch (err){
        console.log(err);

      }
  }

}