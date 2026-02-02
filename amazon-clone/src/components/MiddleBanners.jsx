import React from 'react'
import './MiddleBanners.css'
import productInventory from "../assets/products.js";
import { Link } from "react-router-dom";

const MiddleBanners = ({title, id}) => {
  return (
    <div className='MiddleBanners banner-2'>
        <div className="middle-top__title">
        <h1 className="banner-title">{title}</h1>
        </div>
        <div className="product__display--section">
            {
                productInventory.products
                .filter((product)=> 
                    product.id === id
                )
                .slice(0,10)
                .map((product) => {
                    return <div className="acutal__product">
                        <Link to={`/product-page/${product.uid}`}>
                        <img src={product.photos[0].img} alt="" />
                        </Link>
                    </div>
                })
            }
        </div>
        <h1 className="banner-title2">See More</h1>
    </div>
  )
}

export default MiddleBanners