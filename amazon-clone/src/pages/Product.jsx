import React from "react";
import "./Product.css";
import Navbar from "../components/Navbar";
import ProductsAct from "../components/ProductsAct";
import { useMemo } from "react"
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import PriceRange from "../components/PriceRange";
import productInventory from "../assets/products.js";
import LoadingProductsAct from "../components/LoadingProductsAct.jsx";

const Product = () => {
    const { id } = useParams(); 
  const productId = id

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  setLoading(true);

  const timer = setTimeout(() => {
    setLoading(false);
  }, 300);

  return () => clearTimeout(timer);
}, [productId]);



  const [filter, setFilter] = useState("");

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  return (
    <div className="Product">
      <div className="product__page--actual">
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
                <select className='filter-1' id="filter" onChange={handleFilterChange}>
                    <option value="" disabled selected>Filter</option>
                  <option value="LOW_TO_HIGH" >Price, Low to High</option>
                  <option value="HIGH_TO_LOW" >Price, High to Low</option>
                  <option value="RATING" >Rating</option>
                </select>
            </div>
          </div>
          <div className="right__products">
            {
              loading ? <LoadingProductsAct /> : <ProductsAct productId={productId} filter={filter}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
