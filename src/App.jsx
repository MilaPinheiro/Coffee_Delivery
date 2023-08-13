import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { HomePage } from "./components/Home";
import { OrderCheckout } from "./components/OrderCheckout";


function App() {
  

  const [selectedCoffees, setSelectedCoffees] = useState([]); 

  const selectCoffee = (coffeeId) => {
    if (selectedCoffees.includes(coffeeId)) {
      setSelectedCoffees(selectedCoffees.filter(id => id !== coffeeId));
    } else {
      setSelectedCoffees([...selectedCoffees, coffeeId]);

    }

    console.log(coffeeId)
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<HomePage selectCoffee={selectCoffee} selectedCoffees={selectedCoffees}/>} />
        <Route path="/checkout" element={<OrderCheckout selectCoffee={selectCoffee} selectedCoffees={selectedCoffees} />} />
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;
