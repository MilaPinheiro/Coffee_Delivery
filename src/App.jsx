import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from './components/Header'
import { HomePage } from "./components/Home";
import { OrderCheckout } from "./components/OrderCheckout";

function App() {
  
  const [selectedCoffees, setSelectedCoffees] = useState([]); 

  console.log("App - selectedCoffees:", selectedCoffees);

  const selectCoffee = (coffee) => {
    console.log("Selected coffee ID:", coffee.id);
    setSelectedCoffees((prevSelectedCoffees) => {
      const coffeeAlreadySelected = prevSelectedCoffees.find((prevSelectedCoffee) => prevSelectedCoffee.id === coffee.id
    )
    if (coffeeAlreadySelected) {
      coffeeAlreadySelected.quantity += coffee.quantity
      return [...prevSelectedCoffees]
    }

    return [... prevSelectedCoffees, coffee]
  })
   
  };


  const handleRemoveCoffee = (coffeeId) => {
    console.log("Removing coffee with ID:", coffeeId);
    const updatedSelectedCoffees = selectedCoffees.filter((coffee) => coffee.id !== coffeeId)
    setSelectedCoffees(updatedSelectedCoffees);
}

  const updateCoffeeQuantity = (coffeeId, quantity) => {
  const updateSelectedCoffees = selectedCoffees.map((coffee) => {
    if(coffee.id === coffeeId) {
      return {
        ...coffee,
        quantity,
      }
    }
    return coffee
  })

  setSelectedCoffees(updateSelectedCoffees)
}


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  element={<HomePage selectCoffee={selectCoffee} selectedCoffees={selectedCoffees}  removeCoffee={handleRemoveCoffee} />} />
        <Route path="/checkout" element={<OrderCheckout selectCoffee={selectCoffee} selectedCoffees={selectedCoffees} updateCoffeeQuantity={updateCoffeeQuantity} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
