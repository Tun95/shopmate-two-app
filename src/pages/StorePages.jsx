import React from "react";
import { Helmet } from "react-helmet-async";
import FlashDeals from "../components/flashdeals/FlashDeals";
import Slider from "../components/mainpage/Slider";

import Store from "../components/store/Store";

function StorePages({ productItems, onAdd }) {
  return (
    <>
      <Helmet>
        <title>Store</title>
      </Helmet>
      <div className="store-pages ">
        <Slider />
        <Store />
        <FlashDeals productItems={productItems} onAdd={onAdd} />
      </div>
    </>
  );
}

export default StorePages;
