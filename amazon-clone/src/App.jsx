import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import LogIn from './pages/LogIn'
import { Routes, Route } from "react-router-dom";
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products/:id' element={<Product />}/>
        <Route path='/product-page' element={<ProductPage />}/>
      </Routes>
    </div>
   
  )
}

export default App
