import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Helmet } from "react-helmet-async";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const steps = ["Billing Address", "Confirmation", "Payment Method", "Finish"];

function Confirmation() {
  const navigate = useNavigate();
  const rows = [
    {
      id: 1,
      img: "/images/shops/shops-1.png",
      product: "Mapple Earphones",
      amount: "180",
      quantity: 2,
    },
    {
      id: 2,
      img: "/images/shops/shops-2.png",
      product: "Vivo android one",
      amount: "120",
      quantity: 4,
    },
    {
      id: 3,
      img: "/images/shops/shops-3.png",
      product: "Sony Light",
      amount: 20,
      quantity: 2,
    },
    {
      id: 4,
      img: "/images/shops/shops-4.png",
      product: "Iphone",
      amount: 999,
      quantity: 2,
    },
    {
      id: 5,
      img: "/images/shops/shops-5.png",
      product: "Ceats wireless earphone",
      amount: 80,
      quantity: 2,
    },
    {
      id: 6,
      img: "/images/shops/shops-7.png",
      product: "Redimi Phone",
      amount: 400,
      quantity: 2,
    },
    {
      id: 7,
      img: "/images/shops/shops-8.png",
      product: "Xeats Bluetooth earphones",
      amount: 60,
      quantity: 2,
    },
    {
      id: 8,
      img: "/images/shops/shops-9.png",
      product: "Airpod",
      amount: 120,
      quantity: 2,
    },
    {
      id: 9,
      img: "/images/shops/shops-9.png",
      product: "Airpod",
      amount: 120,
      quantity: 3,
    },
    {
      id: 10,
      img: "/images/shops/shops-9.png",
      product: "Xeats Bluetooth earphones",
      amount: 120,
      quantity: 4,
    },
    {
      id: 11,
      img: "/images/shops/shops-9.png",
      product: "Redimi Phone",
      amount: 120,
      quantity: 5,
    },
  ];

  const summary = [
    {
      id: 1,
      product: "Tax Price",
      amount: "180",
    },
    {
      id: 2,
      product: "Shipping Price",
      amount: "120",
    },
    {
      id: 3,
      product: "Subtotal",
      amount: 20,
    },
    {
      id: 4,
      product: "Grandtotal",
      amount: 999,
    },
  ];
  return (
    <>
      <div className="form_container">
        <Helmet>
          <title>Checkout</title>
        </Helmet>
        <div className="mtb form_box_content">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>
                    <span className="labelProps">{label}</span>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <div className="confirmtion mtb">
            <div className="confirmation_box">
              <div className="order_summary">
                <h3>Order Item Summary:</h3>
                <TableContainer component={Paper} className="table">
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="tableCell">Item</TableCell>
                        <TableCell className="tableCell">Qty</TableCell>
                        <TableCell className="tableCell">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell className="tableCell">
                            {row.product}
                          </TableCell>
                          <TableCell className="tableCell">
                            {row.quantity}
                          </TableCell>
                          <TableCell className="tableCell tableCellPrice">
                            ${row.amount}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="delivery_info">
                <h3>Delivery:</h3>
                <div className="content">
                  <h4>Address</h4>
                  <div className="small_text">
                    Tanke, oke-odo, ilorin, 210141, Kwara, Nigeria
                  </div>

                  <h4>Delivery options</h4>
                  <div className="small_text">
                    Standard shipping (free, 2-3 business days)
                  </div>
                </div>
                <div className="table_content">
                  <h3>Summary:</h3>
                  <TableContainer component={Paper} className="table">
                    <Table aria-label="simple table">
                      <TableBody>
                        {summary.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell className="tableCell">
                              <span className="tableLabel">{row.product}</span>
                            </TableCell>
                            <TableCell className="tableCell tableCellPrice">
                              ${row.amount}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
            <div className="submit_btn">
              <button
                className="stepper_back_btn"
                onClick={() => navigate("/billing")}
              >
                BACK
              </button>
              <button
                className="stepper_next_btn"
                // disabled={isSubmitting}
                onClick={() => navigate("/payment")}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
