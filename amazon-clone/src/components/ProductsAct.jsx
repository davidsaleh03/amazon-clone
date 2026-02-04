import React from "react";
import "./ProductsAct.css";
import productInventory from "../assets/products.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const ProductsAct = ({ productId, filter }) => {
  function ratingProducts(rating) {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FontAwesomeIcon className="star" icon={faStar} key={i} />);
    }
    if (!Number.isInteger(rating)) {
      stars.push(
        <FontAwesomeIcon icon={faStarHalf} key="half" className="star" />,
      );
    }
    return stars;
  }
  let productsToRender = productInventory.products.filter(
    (product) => product.id === productId,
  );

  if (filter === "LOW_TO_HIGH") {
    productsToRender.sort((a, b) => a.price - b.price);
  } else if (filter === "HIGH_TO_LOW") {
    productsToRender.sort((a, b) => b.price - a.price);
  } else if (filter === "RATING") {
    productsToRender.sort((a, b) => b.rating - a.rating);
  }
  return (
    <>
      {productsToRender.map((product, index) => {
        return (
          <Link to={`/product-page/${product.uid}`}>
            <div className="individual__product" key={index}>
              <figure className="product__img">
                <img src={product.photos[0].img} alt="" />
              </figure>

              <div className="product__info">
                <div className="productAct__title h1">{product.name}</div>
                <div className="product__rating h1">
                  <h1>{product.rating}</h1>
                  <div className="product__rating--stars">
                    {ratingProducts(product.rating)}
                  </div>
                  <h1>
                    <span className="blue lighter">(10)</span>
                  </h1>
                </div>
                <div className="product__price h1">${product.price}</div>
                <div className="product__delivery h1">
                  <span className="blue bold">Free 2 Day Delivery</span>
                  <br />
                  On Orders of $35 or more
                </div>
              </div>

              <button className="add__cart">See More</button>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ProductsAct;
