import React from "react";
import "./style.scss";

import { useFormik } from "formik";
import { resetSchema } from "../../components/schemas/Index";

function PasswordReset() {
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
      email: "",
    },
    validationSchema: resetSchema,
    onSubmit,
  });
  console.log(errors);

  return (
    <div className="form-box">
      <div className="form-box-content">
        <form action="" onSubmit={handleSubmit}>
          <div className="inner-form inner-form-small">
            <h2>Password Reset Form</h2>
            <p>Enter email down below to reset password</p>
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
                <span className="error">{errors.email}</span>
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

export default PasswordReset;
