import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Helmet } from "react-helmet-async";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { useFormik } from "formik";
import { billingSchema } from "../components/schemas/Index";
import ShippingAddress from "../components/stepper/ShippingAddress";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginRight: theme.spacing(1),
//   },
// }));

function getSteps() {
  return ["Billing Address", "Confirmation", "Payment", "Finish"];
}

// const ShippingAddress = () => {
//   const onSubmit = (values, actions) => {
//     setTimeout(() => {
//       actions.resetForm();
//     }, 1000);
//   };
//   const {
//     values,
//     errors,
//     handleBlur,
//     touched,
//     isSubmitting,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       phone: "",
//       address: "",
//       city: "",
//       cState: "",
//       zip: "",
//       country: "",
//     },
//     validationSchema: billingSchema,
//   });
//   return (
//     <>
//       <form className="checkout_form d_grid mtb">
//         <div className="form-group">
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             id="firstName"
//             value={values.firstName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={
//               errors.firstName && touched.firstName ? "input-error" : ""
//             }
//             placeholder="Enter Your First Name"
//           />
//           {errors.firstName && touched.firstName && (
//             <p className="error">{errors.firstName}</p>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             id="lastName"
//             value={values.lastName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.lastName && touched.lastName ? "input-error" : ""}
//             placeholder="Enter Your Last Name"
//           />
//           {errors.lastName && touched.lastName && (
//             <p className="error">{errors.lastName}</p>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             id="phone"
//             value={values.phone}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.phone && touched.phone ? "input-error" : ""}
//             placeholder="Enter Your Phone Number"
//           />
//           {errors.phone && touched.phone && (
//             <p className="error">{errors.phone}</p>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Address:</label>
//           <input
//             value={values.address}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.address && touched.address ? "input-error" : ""}
//             placeholder="Enter Your Address"
//             id="address"
//           />
//           {errors.address && touched.address && (
//             <p className="error">{errors.address}</p>
//           )}
//         </div>
//         <div className="form-group">
//           <label htmlFor="city">City:</label>
//           <input
//             id="city"
//             value={values.city}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.city && touched.city ? "input-error" : ""}
//             label="City"
//             placeholder="Enter Your City"
//           />
//           {errors.city && touched.city && (
//             <p className="error">{errors.city}</p>
//           )}
//         </div>
//         <span className="form-group">
//           <label htmlFor="state">State:</label>
//           <RegionDropdown
//             country={values.country}
//             value={values.cState}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="select_styles"
//             // onChange={(val) => setcState(val)}
//           />
//           {errors.cState && touched.cState && (
//             <p className="error">{errors.cState}</p>
//           )}
//         </span>
//         <div className="form-group">
//           <label htmlFor="zip">Zip Code:</label>
//           <input
//             id="zip"
//             value={values.zip}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.zip && touched.zip ? "input-error" : ""}
//             placeholder="Enter Your zipcode"
//           />
//           {errors.zip && touched.zip && <p className="error">{errors.zip}</p>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="country">Country:</label>
//           <CountryDropdown
//             value={values.country}
//             //  onChange={(val) => setCountry(val)}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className="select_styles"
//           />
//           {errors.country && touched.country && (
//             <p className="error">{errors.country}</p>
//           )}
//         </div>
//       </form>
//     </>
//   );
// };
const Confirmation = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const Payment = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const Finish = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ShippingAddress />;
    case 1:
      return <Confirmation />;
    case 2:
      return <Payment />;
    case 3:
      return <Finish />;
    default:
      return "unknown step";
  }
}

const Checkout = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="form_container">
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <div className="mtb form_box_content">
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>
                  <span className="labelProps">{step}</span>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
        ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {getStepContent(activeStep)}
                <div className="d_flex">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className="stepper_back_btn"
                  >
                    back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    // onClick={handleNext}
                    type="submit"
                  >
                    {activeStep === steps.length - 3 ? "Place Order" : "Next"}
                  </Button>
                </div>
              </form>
            </FormProvider>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
