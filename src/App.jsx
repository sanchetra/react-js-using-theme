import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx'
import Home from './Modules/Home/Home.jsx'
import About from './Modules/About/About.jsx';
import Shop from './Modules/Shop/Shop.jsx';
import Products from './Modules/Products/Products.jsx';
import Contact from './Modules/Contact/Contact.jsx';
import CategoryProducts from './Components/CategoryProducts/CategoryProducts.jsx';
import Cart from './Modules/Cart/Cart.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx';
import ProductDetail from './Modules/ProductDetail/Product.jsx'
import Payment from './Components/Payment/Payment.jsx';
import History from './Components/Payment/History.jsx';
import { CartProvider } from './Modules/Cart/CartContext.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="categories/:name" element={<CategoryProducts/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
