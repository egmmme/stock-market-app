import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import MyStocks from "./components/MyStocks";
import Fund from "./components/Fund";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/My_Stocks" element={<MyStocks />} />
          <Route path="/My_Fund" element={<Fund />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
