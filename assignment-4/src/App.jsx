import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { items } from "./data/items";
import { ItemCard } from "./components/ItemCard";
import { Home } from "./pages/Home";
import { Phone } from "./pages/Phone";
import { About } from "./pages/About";
function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/" >Home Page </Link> | {" "}
        <Link to="/about"> ABOUT PAGE </Link> | {" "}
        <Link to="/phone">PHONE NO</Link> | {" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/phone" element={<Phone />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
