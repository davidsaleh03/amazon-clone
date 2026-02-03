import React from 'react'
import Navbar from '../components/Navbar'
import './cart.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = ({cart, changeQuantity, removeProduct}) => {
  return (
    <div className='cart'>
        <Navbar />
        <div className="cart__container">
            <div className="cart__top">
                <h1>Spend $X more to score free shipping</h1>
                <p>Free Shipping on orders $35+</p>
            </div>
            <div className="cart__area">
                <div className="cart__left">
                    <h1 className='cart__title'>Shopping Cart</h1>
                    {
                        cart.map((product, index) => {
                            return <div className="cart__items" key={index}>
                        <div className="item__left">
                            <img src={product.photos[0].img} alt="" />
                        </div>
                        <div className="item__middle">
                            {product.name}
                            <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={product.quantity}
                          onChange={(event) => changeQuantity(product, event.target.value)}
                        />
                      </div>
                        </div>
                        <div className="item__right">
                            {product.price}
                        </div>
                    </div>
                        })
                    }
                    {
                cart.length === 0 && <div className="cart__empty">
                <FontAwesomeIcon icon={faCartShopping} />
                <h2>You don't have any books in your cart!</h2>
                <Link to='/'>
                <button className="btn">Browse Products</button>
                </Link>
              </div>
              }
                </div>
                <div className="cart__right">
                    subtotal here
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart