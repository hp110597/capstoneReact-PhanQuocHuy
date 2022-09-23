import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { signupApi } from "../../redux/reducers/userReducer";
import { boolean } from "yup/lib/locale";

export default function Register(props) {
  const dispatch = useDispatch();

  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      phone: "",
      radio:boolean
    },
    //check validation
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email không được để trống").email('Email không đúng định dạng'),
      password: Yup.string().required("Password không được bỏ trống"),
      passwordConfirm: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Mật khẩu xác nhận không trùng khớp"
        )
      }).required('Mật khẩu xác nhận không được để trống'),
      name:Yup.string().required('Tên không được để trống').matches("[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂ ưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$",'Tên không đúng định dạng'),
      phone:Yup.string().required('Số điện thoại không được để trống').matches("^[0-9][0-9]*$","Số điện thoại không đúng")
    }),
    onSubmit: (values,{resetForm}) => {
      dispatch(signupApi(values));
      // resetForm({values:''})
    },

  });


  return (
    <div className="register-page  text-start">
      <div className="container">
        <h1 className="text-start">Register</h1>
        <hr />
        <form className="row mt-5" onSubmit={frm.handleSubmit}  >
          <div className="col-6">
            <div className="form-group">
              <p>Email</p>
              <input
                className="from-control"
                type="email"
                placeholder="email"
                name="email"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.email ? (
                <p className="text-danger mb-3">{frm.errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-group ">
              <p>Password</p>
              <input
                className="from-control"
                id="password"
                type="password"
                placeholder="password"
                name="password"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
                // value={values.password}
              />
             
              <i
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
              ></i>
            </div>
            {frm.errors.password ? (
                <p className="text-danger mb-3">{frm.errors.password}</p>
              ) : (
                ""
              )}
            <div className="form-group ">
              <p>Password confirm</p>
              <input
                className="from-control"
                id="password-confirm"
                type="password"
                placeholder="password confirm"
                name="passwordConfirm"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
                // value={values.passwordConfirm}              
              />
              
              <i
                class="fa fa-eye"
                id="togglePassword"
                onClick={() => {
                  const type =
                    document
                      .querySelector("#password-confirm")
                      .getAttribute("type") === "password"
                      ? "text"
                      : "password";
                  document
                    .querySelector("#password-confirm")
                    .setAttribute("type", type);
                  // toggle the eye / eye slash icon
                  document
                    .querySelector("#togglePassword")
                    .classList.toggle("fa fa-eye-slash");
                }}
              ></i>
            </div>
            {frm.errors.passwordConfirm ? (
                <p className="text-danger mb-3">{frm.errors.passwordConfirm}</p>
              ) : (
                ""
              )}
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Name</p>
              <input
                className="from-control"
                type="text"
                placeholder="name"
                name="name"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
               {frm.errors.name?<p className="text-danger">{frm.errors.name}</p>:''}
            </div>
            <div className="form-group">
              <p>Phone</p>
              <input
                className="from-control"
                type="text"
                inputMode="numeric"
                placeholder="phone"
                name="phone"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
               {frm.errors.phone?<p className="text-danger">{frm.errors.phone}</p>:''}

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
                <input
                  class=""
                  type="radio"
                  value="false"
                  name="radio"
                  id="female"
                />
                <span class="checkmark"></span>
                <p>Female</p>
              </label>
            </div>
            <button className="my-5">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
