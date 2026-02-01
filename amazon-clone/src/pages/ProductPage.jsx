import React from "react";
import "./ProductPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import Footer from "../components/Footer";
import productInventory from "../assets/products.js";

const ProductPage = () => {
  const product = productInventory.products[0];
  function ratingProducts(rating) {
          const stars = [];
          for (let i = 0; i < Math.floor(rating); i++) {
              stars.push(<FontAwesomeIcon className='star' icon={faStar} key={i} />)
          }
          if (!Number.isInteger(rating)) {
              stars.push(<FontAwesomeIcon icon={faStarHalf} key="half" className="star" />)
          }
    return stars;
      }

  const [activeImage, setActiveImage] = useState(product.photos[0].img);
  return (
    <div className="productPage">
      <Navbar />
      <div className="product__page--act">
        <div className="product__page--top">
          <FontAwesomeIcon icon={faArrowLeft} />
          <h1>Go Back</h1>
        </div>
        <div className="product__page--details">
          <div className="details__left">
            <div className="details__photo--actual">
              <img src={activeImage} />
            </div>
            <div className="details__photos--array">
              {productInventory.products[0].photos.map((photos, index) => {
                return (
                  <div
                    className="photos__array--actual"
                    onClick={() => setActiveImage(photos.img)}
                    key={index}
                  >
                    <img src={photos.img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="details__middle">
            <div className="details__middle--top">
              <h1 className="details__title">{product.name}</h1>
              <h1 className="details__link">Visit the Amazon Basics Page</h1>
              <div className="details__rating">
                <div className="details__rating--act">{product.rating}</div>
                <div className="details__rating--stars">{ratingProducts(product.rating)}</div>
                <div className="details__rating--num">(10)</div>
              </div>
            <h1 className="details__price">${product.price}</h1>
            </div>
            <div className="details__middle--bottom">
                <h1 className="details__bottom--title">About this item</h1>
                <div className="description__list">
                    {
                        productInventory.products[0].about.map((product, index) => {
                            return <div className="description__list--item" key={index}>
                                {product.description}
                            </div>
                        })
                    }
                </div>
            </div>
          </div>
          <div className="details__right">
            <h1 className="details__status">Buy New</h1>
            <h1 className="right__price">${product.price}</h1>
            <h1 className="right__shipping">
                Free 2 Day Delivery
                <br></br>
                On Orders of $35 or more
            </h1>
            <h1 className="details__amount">In Stock</h1>
            <button className="details__btn">Add to Cart</button>
            <div className="right__seller">
                <h1>Shipper / Seller</h1>
                <h1>Amazon.com</h1>
            </div>
            <div className="right__returns">
                <h1>Returns</h1>
                <h1>FREE 30 DAY refund</h1>
            </div>
            <div className="right__payment">
                <h1>Payment</h1>
                <h1>Secure Transaction</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
