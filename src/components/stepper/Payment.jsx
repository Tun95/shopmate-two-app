import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Helmet } from "react-helmet-async";
import stripe from "../../img/payment/stripe.png";
import paypal from "../../img/payment/paypal.png";

const steps = ["Billing Address", "Confirmation", "Payment Method", "Finish"];

function Payment() {
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
            <Stepper activeStep={2} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>
                    <span className="labelProps">{label}</span>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <div className="payment">
            <form action="">
              <div className="choose_method p_flex">
                <div className="choose_method_box d_grid mtb">
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
                          required
                          name="payment"
                          id="stripe"
                          //value={Stripe}
                          //onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <strong> Pay $999 with credit card</strong>
                      </span>
                    </div>
                  </label>
                  <label
                    className={
                      openPaypalModal
                        ? "active payment_label "
                        : "payment_label "
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
                          required
                          name="payment"
                          id="paypal"
                          //value={Stripe}
                          //onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <strong> Pay $999 with PayPal</strong>
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
