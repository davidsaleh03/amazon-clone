import React from "react";
import "./ProductPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import {
  faArrowLeft,
  faLocationDot,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import productInventory from "../assets/products.js";
import MiddleBanners2 from "../components/MiddleBanners2.jsx";

const ProductPage = ({addToCart, cart}) => {
    const { uid } = useParams(); 
  const product = productInventory.products.find(p => p.uid === uid);

  function addProductToCart(product) {
    addToCart(product)
  }

  function productExistsOnCart() {
    return cart.find(product => product.uid === uid)
  }

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

  const navigate = useNavigate()

  const [activeImage, setActiveImage] = useState('');

  useEffect(() => {
    if (product) {
      setActiveImage(product.photos[0].img);
    }
  }, [product])

  const [modalOpen, isModalOpen] = useState(false);

  function openReviews() {
    isModalOpen(true);
  }

  function closeReviews() {
    isModalOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);


  return (
    <div className="productPage">
      <div className="product__page--act">
        {modalOpen && (
         <div className="modal__overlay">

          <div className="reviews__modal">
            <FontAwesomeIcon
              className="xmark"
              onClick={closeReviews}
              icon={faCircleXmark}
            />
            <div className="reviews__left">
              <div className="overall__rating">
                <h1>Overall rating: {product.rating}</h1>
                <div className="overall__stars">
                  {ratingProducts(product.rating)}
                </div>
              </div>
              <h1 className="overall__title">{product.name}</h1>
              <div className="overall__img">
                <img src={product.photos[0].img} alt="" />
              </div>
              <button className="review__product">Review Product</button>
            </div>
            <div className="reviews__right">
              <div className="reviews__section">
                {product.reviews.map((product, index) => {
                  return (
                    <div className="review__actual" key={index}>
                      <h1 className="review__name">{product.name}</h1>
                      <div className="review__rating">
                        <h1 className="review__number">{product.rating}</h1>
                        <div className="review__stars">
                          {ratingProducts(product.rating)}
                        </div>
                      </div>
                      <p className="review__review">{product.review}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
         </div>
        )}
        <div className="product__page--top">
          <FontAwesomeIcon className='back-button' onClick={()=>{navigate(-1)}} icon={faArrowLeft} />
        </div>
        <div className="product__page--details">
          <div className="details__left">
            <h1>{product.name}</h1>
            <div className="details__photo--actual">
              <img src={activeImage} />
            </div>
            <div className="details__photos--array">
              {product.photos.map((photos, index) => {
                return (
                  <div
                    className={`photos__array--actual ${activeImage === photos.img ? "active" : ""}`}
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
            <div className="details__middle--top top-1">
              <h1 className="details__title">{product.name}</h1>
              <Link to={`/products/${product.id}`}>
              <h1 className="details__link">Visit the {product.page} Page</h1>
              </Link>
              <div className="details__rating">
                <div className="details__rating--act">{product.rating}</div>
                <div className="details__rating--stars">
                  {ratingProducts(product.rating)}
                </div>
                <div className="details__rating--num">(10)</div>
              </div>
              <div className="details__see--more" onClick={openReviews}>
                See all reviews
              </div>
              <h1 className="details__price">${product.price}</h1>
            </div>
            <div className="details__middle--top top-2">
                <div className="ratings-2">
              <h1 className="details__title">{product.name}</h1>
              <h1 className="details__link">Visit the Amazon Basics Page</h1>
              <div className="details__rating">
                <div className="details__rating--act">{product.rating}</div>
                <div className="details__rating--stars">
                  {ratingProducts(product.rating)}
                </div>
                <div className="details__rating--num">(10)</div>
              </div>
              <div className="details__see--more" onClick={openReviews}>
                See all reviews
              </div>
                </div>
              <h1 className="details__price">${product.price}</h1>
            </div>
            <div className="new__middle">
            <div className="details__right--container new-2">
                <div>
              <h1 className="details__status">Buy New:</h1>
              <h1 className="right__price">${product.price}</h1>
              <h1 className="right__shipping">
                Free 2 Day Delivery On Orders of $35 or more
              </h1>
              <div className="right__shipping--location">
                <FontAwesomeIcon
                  className="location__icon"
                  icon={faLocationDot}
                />
                <h1>Delivering to New York</h1>
              </div>
              <h1 className="details__amount">In Stock</h1>
              {
                productExistsOnCart() ? (
                  <Link to='/cart'>
                    <button className="details__btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="details__btn" onClick={() => addProductToCart(product)} >Add to Cart</button>
                )
              }
                </div>
                <div>
              <div className="right__seller">
                <h1>Shipper/Seller</h1>
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
            <div className="details__middle--bottom">
              <h1 className="details__bottom--title">About this item</h1>
              <div className="description__list">
                {product.about.map((product, index) => {
                  return (
                    <div className="description__list--item" key={index}>
                      {product.description}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="details__right">
            <div className="details__right--container">
              <h1 className="details__status">Buy New:</h1>
              <h1 className="right__price">${product.price}</h1>
              <h1 className="right__shipping">
                Free 2 Day Delivery On Orders of $35 or more
              </h1>
              <div className="right__shipping--location">
                <FontAwesomeIcon
                  className="location__icon"
                  icon={faLocationDot}
                />
                <h1>Delivering to New York</h1>
              </div>
              <h1 className="details__amount">In Stock</h1>
              {
                productExistsOnCart() ? (
                  <Link to='/cart'>
                    <button className="details__btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="details__btn" onClick={() => addProductToCart(product)} >Add to Cart</button>
                )
              }
              <div className="right__seller">
                <h1>Shipper/Seller</h1>
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
        <div className="product__page--lower">
          <MiddleBanners2 name={product.name} id={product.id} />
        </div>
      </div>
      <div className="home__middle--low">
        <h1 className="low__title">See Personalized Reccomendations</h1>
        <button className="low__btn">Sign In</button>
      </div>
    </div>
  );
};

export default ProductPage;
