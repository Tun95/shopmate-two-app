import { useFormik } from "formik";
import React, { useState } from "react";

import "./style.scss";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { newPassSchema } from "../../components/schemas/Index";

function PassResetForm() {
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
  };
  const {
    values,
    errors,
    handleBlur,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: newPassSchema,
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
          <div className="inner-form inner-form-small">
            <h2>New Password</h2>
            <p>Enter new password down below</p>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type={type}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "input-error" : ""
                }
                id="password"
                placeholder="Enter new password"
              />
              <span onClick={handleToggle}>
                <Icon icon={icon} size={20} className="eye-icon" />
              </span>
              {errors.password && touched.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="form-btn">
              <button className="form-submit-btn" disabled={isSubmitting}>
                Reset Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassResetForm;
