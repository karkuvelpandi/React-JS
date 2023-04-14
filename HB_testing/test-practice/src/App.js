
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/iframe1" element={<ComponentA />} />
          <Route path="/iframe2" element={<ComponentB />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
