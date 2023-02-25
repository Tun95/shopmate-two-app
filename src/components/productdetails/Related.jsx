import React from "react";
import RelatedCard from "./RelatedCard";
import "./styles.css";
function Related({ productItems, onAdd }) {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1>Related Products</h1>
          </div>
          <RelatedCard productItems={productItems} onAdd={onAdd} />
        </div>
      </section>
    </>
  );
}

export default Related;
