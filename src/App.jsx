import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProdcut from "./pages/SingleProdcut";
import CartPage from "./pages/CartPage";
import Catalog from "./pages/catalog/Catalog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/singleProduct/:id" element={<SingleProdcut />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}
