import { useFormik } from "formik";
import React from "react";
import { otpSchema } from "../../components/schemas/Index";

import "./style.scss";

function AccountVerify() {
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
  };
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        otp: "",
      },
      validationSchema: otpSchema,
      onSubmit,
    });
  console.log(errors);
  return (
    <div className="form-box">
      <div className="form-box-content">
        <form action="" onSubmit={handleSubmit}>
          <div className="inner-form inner-form-small">
            <h2>Account Verification</h2>
            <p>Enter OTP sent to your email down below</p>
            <div className="form-group">
              <label htmlFor="otp">OTP Token</label>
              <input
                type="text"
                value={values.otp}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.otp && touched.otp ? "input-error" : ""}
                id="otp"
                placeholder="Enter OTP"
              />
              {errors.otp && touched.otp && (
                <span className="error">{errors.otp}</span>
              )}
            </div>
            <div className="form-btn">
              <button className="form-submit-btn">Verify Now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountVerify;
