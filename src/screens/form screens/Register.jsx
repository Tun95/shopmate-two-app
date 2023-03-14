import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage, Field, Form } from "formik";

import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { basicSchema } from "../../components/schemas/Index";

function Register() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

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
  //TOGGLE PASSWOD VIEW
  const [typeCom, setTypeCom] = useState("password");
  const [iconCom, setIconCom] = useState(eyeOff);

  const handleComToggle = () => {
    if (typeCom === "password") {
      setIconCom(eye);
      setTypeCom("text");
    } else {
      setIconCom(eyeOff);
      setTypeCom("password");
    }
  };

  const handleSubmit = async (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
    }, 1000);
  };
  return (
    <div className="form-box">
      <div className="form-box-content">
        <Formik
          initialValues={initialValues}
          validationSchema={basicSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting,
            values,
          }) => (
            <Form action="" onSubmit={handleSubmit}>
              <div className="inner-form">
                <h2>Register Now</h2>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.firstName && touched.firstName ? "input-error" : ""
                    }
                    id="firstName"
                    placeholder="Enter your first name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.lastName && touched.lastName ? "input-error" : ""
                    }
                    id="lastName"
                    placeholder="Enter your last name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Eamil</label>

                  <Field
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email ? "input-error" : ""
                    }
                    id="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
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
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">Comfirm Password</label>
                  <Field
                    name="passwordConfirmation"
                    type={typeCom}
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.passwordConfirmation &&
                      touched.passwordConfirmation
                        ? "input-error"
                        : ""
                    }
                    id="cpassword"
                    placeholder="Comfirm password"
                  />
                  <span onClick={handleComToggle}>
                    <Icon icon={iconCom} size={20} className="eye-icon" />
                  </span>
                  <ErrorMessage
                    name="passwordConfirmation"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-btn">
                  <button disabled={isSubmitting} className="form-submit-btn">
                    Register
                  </button>
                </div>
                <div className="form-lower-text">
                  <p>Already a member?</p>
                  <span>
                    <Link to="/login">Login</Link>
                  </span>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
