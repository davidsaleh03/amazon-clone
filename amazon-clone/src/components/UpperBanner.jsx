import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";
import banner4 from "../assets/banner-4.jpg";
import banner5 from "../assets/banner-5.jpg";
import "./UpperBanner.css";
import productInventory from '../assets/products.js'

const slides = [banner1, banner2, banner3, banner4, banner5];

const UpperBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbanner">
      <div className="UpperBanner">
        <div
          className="upperbanner__track"
          style={{ "--slide-index": current }}
        >
          {slides.map((src, index) => {
            return (
              <div className="upperbanner__slide" key={index}>
                <img src={src} alt="" />
              </div>
            );
          })}
        </div>
        <FontAwesomeIcon
          className="arrow__left"
          icon={faAngleLeft}
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
          }
        />
        <FontAwesomeIcon
          className="arrow__right"
          icon={faAngleRight}
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        />
      </div>
      <div className="topmodules">
        <div className="module on__sale">
            <h1 className="module__title">
                Highly Rated in Amazon Basics
            </h1>
            <div className="module__content">

            </div>
            <h2 className="module__footer">See more</h2>
        </div>
        <div className="module high__rated">
            <h1 className="module__title">
                Highly Rated in Home Decor
            </h1>
            <div className="module__content">
                
            </div>
            <h2 className="module__footer">See more</h2>
        </div>
        <div className="module lowest__price">
            <h1 className="module__title">
                Highly Rated in Kitchen
            </h1>
            <div className="module__content">
                
            </div>
            <h2 className="module__footer">See more</h2>
        </div>
        <div className="module module__last continue__shopping">
            <h1 className="module__title">
                Highly Rated in Electronics
            </h1>
            <div className="module__content">
                
            </div>
            <h2 className="module__footer">See more</h2>
        </div>
      </div>
    </div>
  );
};

export default UpperBanner;
