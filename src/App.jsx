import { useState } from "react";
import {
  BrowserRouter, Routes, Route
} from "react-router";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Contacts from "./pages/Contacts";
import Error404 from "./pages/Error404";
import Prodotti from "./pages/Prodotti";
import ProductDetail from "./pages/ProductDetail";
import { BudgetProvider } from "./contexts/BudgetContext";


function App() {

  return (
    <BudgetProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/prodotti" element={<Prodotti />} />
          <Route path="/prodotti/:id" element={<ProductDetail />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </BudgetProvider>

  )




}
export default App;