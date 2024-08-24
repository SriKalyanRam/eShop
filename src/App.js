import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/Checkout" element={<Checkout />}>
          {" "}
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
