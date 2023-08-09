import { useState } from "react";
import { Header } from './components/Header'
import { Coffees } from './components/Coffees'
import { listCoffee } from "./data/listCoffe";



function App() {
  return (
    <>
      <Header />
      {listCoffee.map((coffee) => (
        <Coffees
        key={coffee.id} 
        name={coffee.name}
        description={coffee.description}
        tags={coffee.tags.join(', ')}
        image={coffee.image}
        price={coffee.price}
        />
      ))}
     
    </>
  );
}

export default App;
