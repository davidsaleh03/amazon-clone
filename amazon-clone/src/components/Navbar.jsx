import React from 'react'
import './Navbar.css'
import logo from '../assets/amazon-logo-1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCaretDown,
  faBars,
  faMagnifyingGlass,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="Navbar">
        <div className="navbar__contents--top">
            <figure className="logo__figure">
                <img src={logo} alt="" className="logo__img" />
            </figure>
            <div className="nav__location">
                <FontAwesomeIcon icon={faLocationDot} />
                <div className="nav__location--container">
                    <h1>Delivering to New York</h1>
                    <h1>Update Location</h1>
                </div>
            </div>
            <div className="nav__search">
                <div className="search__left">
                    <h1>All</h1>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
                <div className="search__middle">
                    <h1>Search Amazon</h1>
                </div>
                <div className="search__right">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
            <div className="nav__language">
                <h1>ENG</h1>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div className="nav__account">
                <h1>Hello, sign in</h1>
            </div>
            <div className="nav__returns">
                <h1>Returns</h1>
                <h1>& Orders</h1>
            </div>
            <div className="nav__cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <h1 className='items-cart'>0</h1>
            </div>
        </div>
        <div className="navbar__contents--bottom">
            <div className="nav__all">
                <FontAwesomeIcon icon={faBars} />
                <h1>All</h1>
            </div>
            <div className="nav__btm">
                <h1>Amazon Basics</h1>
            </div>
            <div className="nav__btm">
                <h1>Home Decor</h1>
            </div>
            <div className="nav__btm">
                <h1>Kitchen</h1>
            </div>
            <div className="nav__btm">
                <h1>Electronics</h1>
            </div>
            <div className="nav__btm">
                <h1>Books</h1>
            </div>
            <div className="nav__btm">
                <h1>Registry</h1>
            </div>
            <div className="nav__btm">
                <h1>Gift Cards</h1>
            </div>
            <div className="nav__btm">
                <h1>New Releases</h1>
            </div>
            <div className="nav__btm">
                <h1>Prime</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar