import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { HomePage } from "./components/Home";
import { OrderCheckout } from "./components/OrderCheckout";

function App() {

  const [selectedCoffees, setSelectedCoffees] = useState([]); 


  const selectCoffee = (coffee) => {
    setSelectedCoffees((prevSelectedCoffees) => [
      ...prevSelectedCoffees,
      coffee,
    ]);

    console.log(coffee)
  };


  const removeCoffee = (coffeeId) => {
    const updatedSelectedCoffees = selectedCoffees.filter(id => id !== coffeeId)
  
    console.log(updatedSelectedCoffees)
    setSelectedCoffees(updatedSelectedCoffees);
}


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<HomePage selectCoffee={selectCoffee} selectedCoffees={selectedCoffees} />} />
        <Route path="/checkout" element={<OrderCheckout selectCoffee={selectCoffee} selectedCoffees={selectedCoffees} removeCoffee={removeCoffee}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
