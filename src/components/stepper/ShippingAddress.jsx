import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import { useNavigate } from "react-router-dom";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useFormik } from "formik";
import { billingSchema } from "../schemas/Index";
import "./style.scss";
import stripe from "../../img/payment/stripe.png";
import paypal from "../../img/payment/paypal.png";

const steps = ["Billing Address", "Confirmation", "Payment Method", "Finish"];

function ShippingAddress() {
  const navigate = useNavigate();
  const onSubmit = (values, actions) => {
    // navigate("/confirmation");
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
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      cstate: "",
      zip: "",
      country: "",
      delivery: "",
    },
    validationSchema: billingSchema,
    onSubmit,
  });

  //STRIPE MODAL
  const [openStripeModal, is0penStripeModal] = useState(false);
  const closeStripeModal = () => {
    is0penStripeModal(false);
    document.body.style.overflow = "unset";
  };
  const showStripeModal = () => {
    is0penStripeModal(true);
  };

  const StripeModal = () => {
    closePaypalModal();
    // closePayStackModal();
    // closeCashModal();
    showStripeModal();
  };

  //PAYPAL MODAL
  const [openPaypalModal, is0penPaypalModal] = useState(false);
  const closePaypalModal = () => {
    is0penPaypalModal(false);
    document.body.style.overflow = "unset";
  };
  const showPaypalModal = () => {
    is0penPaypalModal(true);
  };

  const PaypalOrderModal = () => {
    showPaypalModal();
    closeStripeModal();
    // closeCashModal();
    // closePayStackModal();
  };
  return (
    <>
      <div className="form_container">
        <Helmet>
          <title>Checkout</title>
        </Helmet>
        <div className="mtb form_box_content">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={0} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>
                    <span className="labelProps">{label}</span>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <form className="checkout_form  mtb" onSubmit={handleSubmit}>
            <div className="d_grid inner_form">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  id="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName ? "input-error" : ""
                  }
                  placeholder="Enter Your First Name"
                />
                {errors.firstName && touched.firstName && (
                  <p className="error">{errors.firstName}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  id="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? "input-error" : ""
                  }
                  placeholder="Enter Your Last Name"
                />
                {errors.lastName && touched.lastName && (
                  <p className="error">{errors.lastName}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.phone && touched.phone ? "input-error" : ""}
                  placeholder="Enter Your Phone Number"
                />
                {errors.phone && touched.phone && (
                  <p className="error">{errors.phone}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.address && touched.address ? "input-error" : ""
                  }
                  placeholder="Enter Your Address"
                  id="address"
                />
                {errors.address && touched.address && (
                  <p className="error">{errors.address}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="city">City:</label>
                <input
                  id="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.city && touched.city ? "input-error" : ""}
                  label="City"
                  placeholder="Enter Your City"
                />
                {errors.city && touched.city && (
                  <p className="error">{errors.city}</p>
                )}
              </div>
              <span className="form-group">
                <label htmlFor="cstate">State:</label>
                <RegionDropdown
                  country={values.country}
                  value={values.cstate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="select_styles"
                  // onChange={(val) => setcstate(val)}
                />
                {errors.cstate && touched.cstate && (
                  <p className="error">{errors.cstate}</p>
                )}
              </span>
              <div className="form-group">
                <label htmlFor="zip">Zip Code:</label>
                <input
                  id="zip"
                  value={values.zip}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.zip && touched.zip ? "input-error" : ""}
                  placeholder="Enter Your zipcode"
                />
                {errors.zip && touched.zip && (
                  <p className="error">{errors.zip}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="country">Country:</label>
                <CountryDropdown
                  value={values.country}
                  //  onChange={(val) => setCountry(val)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="select_styles"
                />
                {errors.country && touched.country && (
                  <p className="error">{errors.country}</p>
                )}
              </div>
            </div>
            <div className="delivery">
              <h3>Delivery Option:</h3>
              <div className="d_grid choose_method_box">
                <label
                  className={
                    openStripeModal ? "active payment_label" : "payment_label"
                  }
                  htmlFor="stripe"
                  onClick={StripeModal}
                >
                  <div className="label-svg">
                    <div className="svg">
                      <img src={stripe} alt="" />
                    </div>
                    <span className="a_flex input_text">
                      <input
                        type="radio"
                        name="payment"
                        value={values.delivery}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="stripe"
                        //value={Stripe}
                        //onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <small> UPS Delivery method 10-15 business days</small>
                    </span>
                  </div>
                </label>
                <label
                  className={
                    openPaypalModal ? "active payment_label " : "payment_label "
                  }
                  htmlFor="paypal"
                  onClick={PaypalOrderModal}
                >
                  <div className="label-svg">
                    <div className="svg">
                      <img src={paypal} alt="" />
                    </div>

                    <span className="a_flex input_text">
                      <input
                        type="radio"
                        name="payment"
                        value={values.delivery}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="paypal"
                        //value={Stripe}
                        //onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <small> DHL Delivery method 5-10 business days</small>
                    </span>
                  </div>
                </label>
              </div>
              {errors.delivery && touched.delivery && (
                <p className="error">{errors.delivery}</p>
              )}
            </div>
            <div className="submit_btn">
              <button className="stepper_back_btn_disable">BACK</button>
              <button
                className="stepper_next_btn"
                disabled={isSubmitting}
                onClick={() => navigate("/confirmation")}
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;
