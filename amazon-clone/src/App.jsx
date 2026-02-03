import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import LogIn from './pages/LogIn'
import { Routes, Route } from "react-router-dom";
import ProductPage from './pages/ProductPage'
import ScrollToTop from "./components/ScrolltoTop.jsx";
import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {

  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart([...cart, {...product, quantity: 1}]);
  }

  function removeProduct(product) {
    setCart(cart.filter(item => item.uid !== product.uid))
  }

  function numberItem() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }

  function changeQuantity(product, quantity) {
    setCart(
      cart.map((item) => 
        item.uid === product.uid
        ? {
          ...item,
          quantity: +quantity
        }
        : item
      )
    )
  }

  return (
    <div className='app'>
      <Navbar numberItem={numberItem}/>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product />}/>
        <Route path='/product-page/:uid' element={<ProductPage addToCart={addToCart} cart={cart} />}/>
        <Route path='/cart' element={<Cart changeQuantity={changeQuantity} cart={cart} removeProduct={removeProduct} numberItem={numberItem} />}/>
      </Routes>
      <Footer />
    </div>
   
  )
}

export default App;
