import logo from "./logo.svg";
import "./App.scss";
import Product from "./Components/Product";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Cart from "./Components/Cart";
import { NavBar } from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      https://www.youtube.com/watch?v=A_vRvDAZuOo------------------1hr:00Min
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
