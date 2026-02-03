import React from "react";
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, changeQuantity, removeProduct, numberItem }) => {
  function total() {
    let price = 0;
    cart.forEach((product) => {
        price += +product.price * product.quantity
    })
    return price
  }

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__top">
    {total() < 35 ? (
      <>
        <h1>
          Spend ${(35 - total()).toFixed(2)} more to score FREE 2 Day Shipping
        </h1>
        <p>Free Shipping on orders $35+</p>
      </>
    ) : (
      <h1>You have scored FREE 2 Day Shipping!</h1>
    )}
  </div>
        <div className="cart__area">
          <div className="cart__left">
            <div className="cart__left--top">
            <h1 className="cart__title">Shopping Cart</h1>
            <h1 className="cart__ammount">Subtotal ({numberItem()} Items): <span className='sub-bold'>${((total())).toFixed(2)}</span></h1>
            </div>
            {cart.map((product, index) => {
              return (
                <div className="cart__items" key={index}>
                  <div className="item__left">
                    <img src={product.photos[0].img} alt="" />
                  </div>
                  <div className="item__middle">
                    <h1 className="item__name">{product.name}</h1>
                    <div className="cart__quantity">
                      <div className="quantity">
                        <button
                          className="quantity__btn"
                          disabled={product.quantity === 0}
                          onClick={() =>
                            changeQuantity(product, product.quantity - 1)
                          }
                        >
                          −
                        </button>

                        <span className="quantity__value">
                          {product.quantity}
                        </span>

                        <button
                          className="quantity__btn"
                          disabled={product.quantity === 99}
                          onClick={() =>
                            changeQuantity(product, product.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    <h1 onClick={() => removeProduct(product)}>Remove</h1>
                    </div>
                  </div>
                  <div className="item__right">${product.price}</div>
                </div>
              );
            })}
            {cart.length === 0 && (
              <div className="cart__empty">
                <div className="empty__text">
                <FontAwesomeIcon className='shoppingcart' icon={faCartShopping} />
                <h1>You don't have any items in your cart!</h1>
                </div>
                <Link to="/">
                  <button className="btn browse">Browse Products</button>
                </Link>
              </div>
            )}
          </div>
          <div className="cart__right">
            <div className="titles-right">
            <h1 className='right__subtotal'>Subtotal ({numberItem()} Items): <span className='sub-bold'>${((total())).toFixed(2)}</span></h1>
            <h1 className="right__two">Taxes and Fees Calculated at Checkout</h1>
            </div>
            <button className="checkout--btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
