import React from 'react'
import './ProductPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import productInventory from "../assets/products.js";

const ProductPage = () => {
  return (
    <div>
        <Navbar />
        <div className="product__page--act">
            <div className="product__page--top">
                <FontAwesomeIcon icon={faArrowLeft} />
                <h1>Go Back</h1>
            </div>
            <div className="product__page--details">
                <div className="details__left">
                    <div className="details__photos--array">
                        {
                            productInventory.products[0].photos.map((img, index) => {
                                return <div className="photos__array--actual">
                                    <img src={img} alt="" />
                                </div>
                            })
                        }
                    </div>
                    <div className="details__photo--actual"></div>
                </div>
                <div className="details__middle"></div>
                <div className="details__right"></div>
            </div>
        </div>
    </div>
  )
}

export default ProductPage 