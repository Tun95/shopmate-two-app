import React from "react";
import "./style.css";

function Cart({ cartItems, onAdd, onRemove }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex cart-wrap">
          <div className="cart-details ">
            {cartItems.length === 0 && (
              <h1 className="no-items product">Cart Is Empty</h1>
            )}

            {cartItems.map((item) => (
              <div className="cart-list product d_flex" key={item.id}>
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <h4>
                    ${item.price} * {item.qty}
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                  </h4>
                </div>
                <div className="cart-items-function">
                  <div className="removeCart">
                    <button className="removeCart">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <div className="cartControl d_flex">
                    <button className="desCart" onClick={() => onRemove(item)}>
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <button
                      className="incCart dark-btn"
                      onClick={() => onAdd(item)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div className="cart-item-price"></div>
              </div>
            ))}
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>${totalPrice.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
