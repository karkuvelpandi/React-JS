import React from "react"
import UseState from './UseState/UseState'
import Navbar from './Navbar/Navbar'
import Counter from './Counter/Counter'
import Clock from './Clock/Clock'
import ContactApp from './ContactApp/ContactApp'
import UserApp from "./UserApp/UserApp"
import ProductApp from "./ProductApp/ProductApp"
import {BrowserRouter as Router, Routes,Route}from 'react-router-dom'
let App =()=>{
   return <>
   <Router>
      <Navbar/>
      <Routes>
         <Route path='/UseState' element={<UseState/>}/>
         <Route path='/Counter' element={<Counter/>}/>
         <Route path='/Clock' element={<Clock/>}/>
         <Route exact path='/ContactApp' element={<ContactApp/>}/>
         <Route exact path='/UserApp' element={<UserApp/>}/>
         <Route exact path='/ProductApp' element={<ProductApp/>}/>
      </Routes>
   </Router>
   
   
   </>
};
export default App