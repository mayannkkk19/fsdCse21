import React from "react";
import { cars } from "./data/car-list";
import ItemCard from "./components/ItemCard";

const App = () => {
  return (
    <div className="items-grid">
      {
        cars.map(({heading, name, image, price}) => {
          return (
            <ItemCard heading={heading} name={name} image={image} price={price} />
          );
        })
      }
    </div>
  );
};

export default App;
