import React from "react";
import "./ProductsAct.css";
import productInventory from "../assets/products.js";

const ProductsAct = () => {
  return (
    <>
      {productInventory.products.map((product, index) => {
        return <div className="individual__product" key={index}>
            
          <figure className="product__img">
            <img src={product.photos.img1} alt="" />
          </figure>
    
          <div className="product__info">
            <div className="productAct__title h1">{product.name}</div>
            <div className="product__rating h1">{product.rating}</div>
            <div className="product__price h1">${product.price}</div>
            <div className="product__delivery h1">
              Free 2 Day Delivery
              <br />
              On Orders of $35 or more
            </div>
          </div>
          <button className="add__cart">Add to Cart</button>
        </div>;
      })}
    </>
  );
};

export default ProductsAct;
