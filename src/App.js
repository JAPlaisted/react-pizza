import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import FullMenu from "./Pages/FullMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/FullMenu" element={<FullMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
