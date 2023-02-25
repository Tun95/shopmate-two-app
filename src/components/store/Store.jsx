import React from "react";
import Filter from "./Filter";

import StoreItems from "./StoreItems";
import "./styles.css";
import "./styles.scss";

function Store({ onAdd }) {
  return (
    <>
      <section className="store background">
        <div className="container d_flex display_grid">
          <Filter />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="row  f_flex">
                <h2>Store Items</h2>
              </div>
            </div>
            <div className="product-content">
              <StoreItems onAdd={onAdd} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Store;
