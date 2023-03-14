import React from "react";
import Details from "../../components/productdetails/Details";
import Related from "../../components/productdetails/Related";
import ReviewDesc from "../../components/productdetails/ReviewDesc";

function ProductDetails({ productItems, onAdd }) {
  return (
    <>
      <div className="container  product-details-page">
        <Details />
        <ReviewDesc />

        <Related productItems={productItems} onAdd={onAdd} />
      </div>
    </>
  );
}

export default ProductDetails;
