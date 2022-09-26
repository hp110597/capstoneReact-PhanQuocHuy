import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../redux/reducers/userReducer";
import FacebookLogin from "react-facebook-login";

export default function Profile() {
//   const { userLogin } = useSelector((state) => state.userReducer);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     //Khi trang vừa load lên thì gọi api => (dispatch lại getProfile api đã xâu dựng)
//     dispatch(getProfileApi());
//   }, []);


const responseFacebook=()=>{
  return <div></div>
}
  return <div>
     <FacebookLogin
        appId="762219268192850"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      />
  </div>;
}
