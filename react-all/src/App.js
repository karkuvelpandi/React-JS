import React from "react"
import UseState from './UseState/UseState'
import Navbar from './Navbar/Navbar'
import Counter from './Counter/Counter'
import Clock from './Clock/Clock'
import ContactApp from './ContactApp/ContactApp'
import UserApp from "./UserApp/UserApp"
import ProductApp from "./ProductApp/ProductApp"
import {BrowserRouter as Router, Routes,Route}from 'react-router-dom'
import React from 'react'
import "./App.css"
import ToDo from './ToDo/ToDo'
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pending from './ToDo/Pending'
import Completed from './ToDo/Completed'
import Book from './stateVSvariables/stateVSvariables'
import HOCComp from './HOC Component/HOCComp'
import UseMousePosition from './Cursor/UseMousePosition'
import Download from './Download/Download.tsx'
import Pagination from './Pagination/Pagination'
let App =()=>{
   return <>
   <Router>
      <Navbar/>
      <Book/>
        <HOCComp />
        <Download/>
        <br/>
        <hr/>
        <br/>
        <hr/>
        <Pagination/>
      <Routes>
         <Route path='/UseState' element={<UseState/>}/>
         <Route path='/Counter' element={<Counter/>}/>
         <Route path='/Clock' element={<Clock/>}/>
         <Route exact path='/ContactApp' element={<ContactApp/>}/>
         <Route exact path='/UserApp' element={<UserApp/>}/>
         <Route exact path='/ProductApp' element={<ProductApp/>}/>
         <Route path="/completed" element={<Completed />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/todo" element={<ToDo />} /> 
      </Routes>
   </Router>
   
   
   </>
};
export default App