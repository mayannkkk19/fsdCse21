import React from "react";
import { items } from "./data/items";
import { ItemCard } from "./components/ItemCard";
function App() {
  return (
    <div>
      <Header />
      <div className="items-grid">
        {items.map(({ name, image, price }) => {
          return <ItemCard name={name} image={image} price={price} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
