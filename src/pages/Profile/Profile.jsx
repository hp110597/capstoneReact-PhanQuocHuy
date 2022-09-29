import { useFormik } from "formik";
import * as Yup from "yup";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi, updateProfileApi } from "../../redux/reducers/userReducer";
import { boolean } from "yup/lib/locale";

export default function Profile() {
  const { userLogin } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //Khi trang vừa load lên thì gọi api => (dispatch lại getProfile api đã xâu dựng)
    dispatch(getProfileApi());
  }, []);

  const frm = useFormik({
    initialValues: {
    ...userLogin,
    name:'',
    phone:'',
    radio:boolean
    },
    // enableReinitialize:true,
   
    //check validation
    validationSchema: Yup.object().shape({    
      name:Yup.string().matches("[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$",'Tên không đúng định dạng'),
      phone:Yup.string().matches("^[0-9][0-9]*$","Số điện thoại không đúng")
    }),
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      dispatch(updateProfileApi(values));
      // resetForm({values:''})
    },

  });

  return (
    <>
      <div className="profile-page ">
        <div className="row row1">
          <div className="col-3">
            <h3 className="text-start ps-5">Profile</h3>
          </div>
        </div>
        <form className="row row2" onSubmit={frm.handleSubmit}>
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
                placeholder={userLogin?.email}
                name="email"
                disabled
                style={{cursor:'no-drop'}}
                value={userLogin?.email}
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
                // onSubmit={frm.handleSubmit}
              />
             
            </div>
            <div className="form-group">
              <p>Phone</p>
              <input
                className="from-control"
                type="phone"
                inputMode="numeric"
                placeholder='Điền SĐT muốn cập nhật'
                name="phone"              
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.phone?<p className="text-danger">{frm.errors.phone}</p>:''}
            </div>
          </div>
          <div className="col-5">
            <div className="form-group">
              <p>Name</p>
              <input
                className="from-control"
                type="text"
                placeholder='Điền tên muốn cập nhật'
                name="name"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.name?<p className="text-danger">{frm.errors.name}</p>:''}
            </div>
            <div className="form-group ">
              <p>Password</p>
              <input
                className="from-control"
                style={{cursor:'no-drop'}}
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                disabled
                value={userLogin?.password}
              />
            </div>
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
              <button className="mx-auto">Update</button>
            </div>
          </div>
       
        </form>
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
                <p className="text-start">+ Orders have been placed on {orderItem.date}</p>
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
                      return (
                        <tr key={index}>
                          <td style={{width:'15%'}} >{orderItem.id}</td>
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
                          <td style={{width:'15%'}}>{(item.price*item.quantity).toLocaleString()}</td>
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
