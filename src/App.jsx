import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { HomePage } from "./components/Home";
import { OrderCheckout } from "./components/OrderCheckout";


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/checkout" element={<OrderCheckout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
