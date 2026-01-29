import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <div className="home__to-top">
            <h1>Back to the top</h1>
        </div>
        <div className="footer__section">
           <ul className="footer__list">
            <li className="list__title">Get to Know Us</li>
            <li className="list__item">Careers</li>
            <li className="list__item">Amazon Newsletter</li>
            <li className="list__item">About Amazon</li>
            <li className="list__item">Accessibility</li>
            <li className="list__item">Sustainability</li>
            </ul> 
           <ul className="footer__list">
            <li className="list__title">Make Money with Us</li>
            <li className="list__item">Sell on Amazon</li>
            <li className="list__item">Sell apps on Amazon</li>
            <li className="list__item">Supply to Amazon</li>
            <li className="list__item">Protect & Build Your Brand</li>
            <li className="list__item">Become an Affiliate</li>
            </ul> 
           <ul className="footer__list">
            <li className="list__title">Amazon Payment Products</li>
            <li className="list__item">Amazon Visa</li>
            <li className="list__item">Amazon Store Card</li>
            <li className="list__item">Amazon Secured Card</li>
            <li className="list__item">Amazon Business Card</li>
            <li className="list__item">Shop with Points</li>
            </ul> 
           <ul className="footer__list">
            <li className="list__title">Let Us Help You</li>
            <li className="list__item">Your Account</li>
            <li className="list__item">Your Orders</li>
            <li className="list__item">Shipping Rates & Policies</li>
            <li className="list__item">Amazon Prime</li>
            <li className="list__item">Returns & Replacements</li>
            </ul> 
        </div>
        <div className="footer__bottom">
            <ul className="bottom__top1">
                <li className="bottom__top1--title">
                    Conditions of Use
                </li>
                <li className="bottom__top1--title">
                    Privacy Notice
                </li>
                <li className="bottom__top1--title">
                    Consumer Health
                </li>
                <li className="bottom__top1--title">
                    Data Privacy
                </li>
                <li className="bottom__top1--title">
                    Your Ads
                </li>
                <li className="bottom__top1--title">
                    Privacy Choices
                </li>
            </ul>
            <ul className="bottom__bottom1">
                <li className="bottom__bottom1">
                    © 1996-2026, Amazon.com, Inc. or its affiliates
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer