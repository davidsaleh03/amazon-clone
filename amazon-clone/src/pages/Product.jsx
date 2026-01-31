import React from "react";
import "./Product.css";
import Navbar from "../components/Navbar";
import ProductsAct from "../components/ProductsAct";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import PriceRange from "../components/PriceRange";
import productInventory from "../assets/products.js";

const Product = () => {
    const {id} = useParams()

    const pageProduct = productInventory.products.filter(
  (product) => product.id === id
)

const productId = pageProduct
  return (
    <div className="Product">
      <Navbar />
      <div className="product__page--actual">
        <div className="top__section"></div>
        <div className="bottom__section">
          <div className="top__bottom">
            <div className="top__bottom-left">
              <h1 className="products__title">Results</h1>
              <p className="products__description">
                Check each product page for other buying options. Price and
                other details may vary based on product size and color.
              </p>
            </div>
            <div className="top__bottom-right">
                <PriceRange />
                <select id="filter">
                    <option value disabled selected>Filter</option>
                    <option value='RATINGHIGH'>Rating, High to Low</option>
                    <option value='RATINGLOW'>Rating, Low to High</option>
                </select>
            </div>
          </div>
          <div className="right__products">
            <ProductsAct productId={productId}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
