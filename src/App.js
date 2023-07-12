import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './pages/Navbar';
import First from "./pages/First";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Output from "./pages/Output";



function App() {
  return (
    <div className="app">
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/image" element={<First />} />
      <Route path="/error" element={<Second />} />
      <Route path="/sql" element={<Third/>}/>
      <Route path="/output" element={<Output/>}/>
    </Routes>
  </Router>
  </div>
  );
}

export default App;

