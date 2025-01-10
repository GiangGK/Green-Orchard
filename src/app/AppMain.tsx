import React from "react";
import Home from "../layouts/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function AppMain() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={"gha"} />
      </Routes>
    </Router>
  );
}
