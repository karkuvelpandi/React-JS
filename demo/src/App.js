import React from "react";
import ListFade from "./animations/ListFade";
import ListFadeWithSpring from "./animations/ListFadeWithSpring";
import ListFadeCodepen from "./animations/ListFadeCodepen";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AnimatedList from "./animations/FinalOut/AnimatedList";
import { ListComponent } from "./animations/ListComponent";
import { ListVirtuoso } from "./animations/ListVirtuoso";
import { ListVirtual } from "./animations/ListVirtual";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/listfadecss" element={<AnimatedList />} />
          <Route path="/listfadetailwind" element={<ListFade />} />
          <Route path="/listfadespring" element={<ListFadeWithSpring />} />
          <Route path="/listfadecodepen" element={<ListFadeCodepen />} />
          <Route path="/trail5" element={<ListComponent />} />
          <Route path="/trail6" element={<ListVirtuoso />} />
          <Route path="/trail7" element={<ListVirtual />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
