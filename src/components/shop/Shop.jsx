import React from "react";
import Catg from "./Catg";
import ShopCard from "./ShopCard";
import Sdata from "./Sdata";
import "./styles.css";

function Shop({ onAdd }) {
  const { shopItems } = Sdata;
  return (
    <>
      <section className="store shop background">
        <div className="container d_flex shop-grid">
          <Catg />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row ">
                <span>View all</span>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content">
              <ShopCard shopItems={shopItems} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
