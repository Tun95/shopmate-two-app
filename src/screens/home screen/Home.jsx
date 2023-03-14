import React from "react";
import { Helmet } from "react-helmet-async";
import Annct from "../../components/home/announcement/Annct";
import Discount from "../../components/home/discount/Discount";
import FlashDeals from "../../components/home//flashdeals/FlashDeals";
import Home from "../../components/home/mainpage/Home";
import NewArrival from "../../components/home/newArrival/NewArrival";
import Shop from "../../components/home/shop/Shop";
import TopCate from "../../components/home/top/TopCate";
import Wrapper from "../../components/home/wrapper/Wrapper";

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
