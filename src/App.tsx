import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.tsx";
import PromotionalBanner from "./components/PromotionalBanner.tsx";
import WebDevelopment from "./pages/WebDevelopment.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <PromotionalBanner />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/websitedevelopment" element={<WebDevelopment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
