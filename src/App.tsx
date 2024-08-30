import * as React from "react";
import Login from "./pages/Login";
import Aside from "./components/Aside";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConversionAndRetention from "./pages/ConventionAndRetention/CoventionAndRetention";
import SingleProduct from "./components/SingleProduct";
import Products from "./pages/ConventionAndRetention/Products";

function App() {
  return (
    <div style={{ marginLeft: 10 }}>
      <BrowserRouter>
        <div className="flex">
          <div className="w-1/5">
            <Aside />
          </div>
          <div className="w-4/5 ml-10">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/singleproduct" element={<SingleProduct />} />
              <Route path="/conversion" element={<ConversionAndRetention />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
