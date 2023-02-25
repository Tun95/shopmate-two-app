import React from "react";
import FlashDeals from "../components/flashdeals/FlashDeals";
import Slider from "../components/mainpage/Slider";

import Store from "../components/store/Store";

function StorePages({ productItems, onAdd }) {
  return (
    <>
      <div className="store-pages ">
        <Slider />
        <Store />
        <FlashDeals productItems={productItems} onAdd={onAdd} />
      </div>
    </>
  );
}

export default StorePages;
