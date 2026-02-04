import React from 'react'
import './LoadingCart.css'
import '../pages/Cart.css'

const LoadingCart = () => {
  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__top shimmer" >
        </div>
        <div className="cart__area">
          <div className="cart__left">
            <div className="cart__left--top">
              <div className="cart__title--2 shimmer"></div>
              <div className="cart__ammount--2 shimmer"></div>
            </div>
            {[1, 2, 3].map((_, i) => {
              return (
                <div className="cart__items" key={i}>
                  <div className="item__left">
                    <div className="item__left--img shimmer"></div>
                  </div>
                  <div className="item__middle">
                    <div className="item__name--2 shimmer"></div>
                    <div className="cart__quantity--2 shimmer"></div>
                  </div>
                  <div className="item__right--2 shimmer"></div>
                </div>
              );
            })}
          </div>
          <div className="cart__right">
            <div className="titles-right">
              <div className="right__subtotal--2 shimmer"></div>
              <div className="right__two--2 shimmer"></div>
            </div>
            <div className="checkout--btn--2 shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingCart