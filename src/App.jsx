import "./App.css"
import React from 'react'
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./views/Home/ItemListContainer"
import Sandboxs from "./views/SandBoxs"
import Sports from "./views/Sports"
import Cart from "./views/Cart"
import Checkout from "./views/Checkout"
import ItemDetailContainer from "./components/ItemDetailContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemDetailContainer/>}/>
          <Route path="/sandbox" element={<Sandboxs/>}/>
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
