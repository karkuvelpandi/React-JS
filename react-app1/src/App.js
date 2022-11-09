import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Components/Pages/Home"
import Marketing from './Components/Pages/Marketing';
import Design from './Components/Pages/Design';
import Development from './Components/Pages/Development';
import Maintanence from './Components/Pages/Maintanence';
import Services from './Components/Pages/Services';
import ContactUs from './Components/Pages/ContactUs';
import SignUp from './Components/Pages/SignUp';
// import ProductApp from "./ProductApp/ProductApp"

function App() {
  return <>
    <Router>
      <Navbar />
      <Routes>
            <Route exact path='/Home' element={<Home/>} >Home </Route>
            <Route exact path='/Services' element={<Services/>} >Services </Route>
            <Route exact path='/Contact-us' element={<ContactUs/>} >ContactUs </Route>
            <Route exact path='/Sign-up' element={<SignUp/>} >SignUp </Route>
            <Route exact path='/Marketing' element={<Marketing/>} >Marketing </Route>
            <Route exact path='/Design' element={<Design/>} >Design </Route>
            <Route exact path='/Development' element={<Development/>} >Development </Route>
            <Route exact path='/Maintanence' element={<Maintanence/>} >Maintanence </Route>
            {/* <Route exact path='/ProductApp' element={<ProductApp/>} >Maintanence </Route> */}
      </Routes>
    </Router> 

  </>


}

export default App;
