import React from "react";
import wristWatch from "../../img/slide-1.png";
import "./styles.css";

function Details() {
  return (
    <>
      <section className=" background details ">
        <div className="l_flex">
          <div className="p-width">
            <div className="img">
              <img src={wristWatch} alt="" />
            </div>
            <div className="product-details">
              <div className="det-header f_flex">
                <h2>Wrist Watch</h2>
                <div className="countInstock">
                  <span>Instock</span>
                </div>
              </div>
              <div className="rate-num f_flex">
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="num-count">
                  ( <span>4.5</span> ratings )
                </div>
              </div>
              <div className="price">
                <span>$200</span>
              </div>
              <div className="color">
                <label htmlFor="">Color: </label>
              </div>
              <div className="size">
                <label htmlFor="">Size: </label>
              </div>
              <div className="quantity .a_flex">
                <label htmlFor="">Quantity: </label>
                <div className="a_flex">
                  <button>
                    <i className="fa fa-minus"></i>
                  </button>
                  <span className="qty l_flex">5</span>
                  <button>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="desc">
                <label htmlFor="">Description: </label>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  deleniti, repellendus aspernatur quis ipsum nesciunt, quisquam
                  quidem corrupti fuga necessitatibus repudiandae. Perferendis
                  optio tenetur, officia repellat nobis accusamus atque
                  laboriosam, nulla, facere saepe debitis dolores at. Magnam,
                  nesciunt quasi! Quidem aut iste, tenetur sint unde illum non
                  earum minus voluptatibus.
                </p>
              </div>
              <div className="addtocart">
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
