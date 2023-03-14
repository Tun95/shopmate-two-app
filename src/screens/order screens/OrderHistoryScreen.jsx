import React from "react";
import { Helmet } from "react-helmet-async";
import OrderHistory from "../../components/orderhistory/OrderHistory";

function OrderHistoryScreen() {
  return (
    <>
      <Helmet>
        <title>Track Order</title>
      </Helmet>
      <div className="container">
        <OrderHistory />
      </div>
    </>
  );
}

export default OrderHistoryScreen;
