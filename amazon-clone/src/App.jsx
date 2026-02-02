import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import LogIn from './pages/LogIn'
import { Routes, Route } from "react-router-dom";
import ProductPage from './pages/ProductPage'
import ScrollToTop from "./components/ScrolltoTop.jsx";

function App() {

  return (
    <div className='app'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product />}/>
        <Route path='/product-page/:uid' element={<ProductPage />}/>
      </Routes>
    </div>
   
  )
}

export default App
