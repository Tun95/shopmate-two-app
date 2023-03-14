import React, { useState } from "react";
import StoreData from "../../components/store/StoreData";
import Wish from "../../components/wish list/Wish";

function WishScreen() {
  const { shopItems } = StoreData;
  return (
    <div className="container wish_container">
      <div className="box_shadow mtb">
        <div className="productTitleContainer ">
          <h2 className="featured uppercase">Wish List </h2>
        </div>
        <div className="product-content ">
          <Wish shopItems={shopItems} />
        </div>
      </div>
    </div>
  );
}

export default WishScreen;
