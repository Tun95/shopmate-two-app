import React from "react";
import { Helmet } from "react-helmet-async";
import Annct from "../components/announcement/Annct";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashdeals/FlashDeals";
import Home from "../components/mainpage/Home";
import NewArrival from "../components/newArrival/NewArrival";
import Shop from "../components/shop/Shop";
import TopCate from "../components/top/TopCate";
import Wrapper from "../components/wrapper/Wrapper";

function Pages({ productItems, cartItems, onAdd }) {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="home_outline">
        <Home cartItems={cartItems} />
        <FlashDeals productItems={productItems} onAdd={onAdd} />
        <TopCate />
        <NewArrival />
        <Discount />
        <Shop onAdd={onAdd} />
        <Annct />
        <Wrapper />
      </div>
    </>
  );
}

export default Pages;
