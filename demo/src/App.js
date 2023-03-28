import React from "react";
import ListFade from "./animations/ListFade";
import ListFadeWithSpring from './animations/ListFadeWithSpring'
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/listfadecss" element={<ListFade />} />
          <Route path="/listfadespring" element={<ListFadeWithSpring />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
