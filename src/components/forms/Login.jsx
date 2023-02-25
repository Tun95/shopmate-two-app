import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas/Index";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function Login() {
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
  };
  const {
    values,
    errors,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  console.log(errors);

  //TOGGLE PASSWOD VIEW
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="form-box">
      <div className="form-box-content">
        <form action="" onSubmit={handleSubmit}>
          <div className="inner-form">
            <h2>Member Login</h2>
            <div className="form-group">
              <label htmlFor="email">Eamil</label>
              <input
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
                id="email"
                placeholder="Enter your email"
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type={type}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
                id="password"
                placeholder="Enter your password"
              />
              <span onClick={handleToggle}>
                <Icon icon={icon} size={20} className="eye-icon" />
              </span>
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>
            <div className="form-btn">
              <button className="form-submit-btn" disabled={isSubmitting}>
                Login
              </button>
            </div>
            <div className="form-lower-text">
              <p className="forgot-password">
                <Link to="/forgot-password"> Forgot Password?</Link>
              </p>
              <span>
                <Link to="/register">Have an account</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
