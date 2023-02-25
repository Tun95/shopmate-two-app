import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Link } from "react-router-dom";
import "./styles.scss";

function OrderHistory() {
  const rows = [
    {
      id: 1,
      img: "/images/shops/shops-1.png",
      product: "Mapple Earphones",
      amount: "180",
      date: "1 Oct",
      customer: "John Smith",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2,
      img: "/images/shops/shops-2.png",
      product: "Vivo android one",
      amount: "120",
      date: "1 Oct",
      customer: "John Smith",
      method: "Stripe",
      status: "Pending",
    },
    {
      id: 3,
      img: "/images/shops/shops-3.png",
      product: "Sony Light",
      amount: 20,
      date: "1 Oct",
      customer: "John Smith",
      method: "PayStack",
      status: "Declined",
    },
    {
      id: 4,
      img: "/images/shops/shops-4.png",
      product: "Iphone",
      amount: 999,
      date: "1 Oct",
      customer: "John Smith",
      method: "PayPal",
      status: "Pending",
    },
    {
      id: 5,
      img: "/images/shops/shops-5.png",
      product: "Ceats wireless earphone",
      amount: 80,
      date: "1 Oct",
      customer: "John Smith",
      method: "PayStack",
      status: "Approved",
    },
    {
      id: 6,
      img: "/images/shops/shops-7.png",
      product: "Redimi Phone",
      amount: 400,
      date: "1 Oct",
      customer: "John Smith",
      method: "PayPal",
      status: "Declined",
    },
    {
      id: 7,
      img: "/images/shops/shops-8.png",
      product: "Xeats Bluetooth earphones",
      amount: 60,
      date: "1 Oct",
      customer: "John Smith",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 8,
      img: "/images/shops/shops-9.png",
      product: "Airpod",
      amount: 120,
      date: "1 Oct",
      customer: "John Smith",
      method: "Cash on Delivery",
      status: "Declined",
    },
    {
      id: 9,
      img: "/images/shops/shops-9.png",
      product: "Airpod",
      amount: 120,
      date: "1 Oct",
      customer: "John Smith",
      method: "Stripe",
      status: "Pending",
    },
    {
      id: 10,
      img: "/images/shops/shops-9.png",
      product: "Airpod",
      amount: 120,
      date: "1 Oct",
      customer: "John Smith",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 11,
      img: "/images/shops/shops-1.png",
      product: "Mapple Earphones",
      amount: "180",
      date: "1 Oct",
      customer: "John Smith",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 12,
      img: "/images/shops/shops-2.png",
      product: "Vivo android one",
      amount: "120",
      date: "1 Oct",
      customer: "John Smith",
      method: "Stripe",
      status: "Pending",
    },
    {
      id: 13,
      img: "/images/shops/shops-3.png",
      product: "Sony Light",
      amount: 20,
      date: "1 Oct",
      customer: "John Smith",
      method: "Cash on Delivery",
      status: "Declined",
    },
    {
      id: 14,
      img: "/images/shops/shops-4.png",
      product: "Iphone",
      amount: 999,
      date: "1 Oct",
      customer: "John Smith",
      method: "PayPal",
      status: "Pending",
    },
    {
      id: 15,
      img: "/images/shops/shops-5.png",
      product: "Ceats wireless earphone",
      amount: 80,
      date: "1 Oct",
      customer: "John Smith",
      method: "Stripe",
      status: "Approved",
    },
    {
      id: 16,
      img: "/images/shops/shops-7.png",
      product: "Redimi Phone",
      amount: 400,
      date: "1 Oct",
      customer: "John Smith",
      method: "PayStack",
      status: "Declined",
    },
    {
      id: 17,
      img: "/images/shops/shops-8.png",
      product: "Xeats Bluetooth earphones",
      amount: 60,
      date: "1 Oct",
      customer: "John Smith",
      method: "Stripe",
      status: "Approved",
    },
    {
      id: 18,
      img: "/images/shops/shops-9.png",
      product: "Airpod",
      amount: 120,
      date: "1 Oct",
      customer: "John Smith",
      method: "Cash on Delivery",
      status: "Declined",
    },
    {
      id: 19,
      img: "/images/shops/shops-9.png",
      product: "Airpod",
      amount: 120,
      date: "1 Oct",
      customer: "John Smith",
      method: "PayPal",
      status: "Pending",
    },
    {
      id: 20,
      img: "/images/shops/shops-9.png",
      product: "Airpod",
      amount: 120,
      date: "1 Oct",
      customer: "John Smith",
      method: "Cash on Delivery",
      status: "Approved",
    },
  ];
  return (
    <div className="order-table">
      <h2>Order History</h2>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
              <TableCell className="tableCell">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell tableCellPrice">
                  ${row.amount}
                </TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
                <TableCell className="tableCell">
                  <button className="tableBtn">Details</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination p_flex">
        <Pagination
          page={1}
          count={10}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              className={`${
                item.page !== 1
                  ? "paginationItemStyle"
                  : "paginationItemStyle active"
              }`}
              component={Link}
              to={`/track-order?page=${item.page}`}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
}

export default OrderHistory;
