import React from 'react'
import "./App.css"
import ToDo from './ToDo/ToDo'
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pending from './ToDo/Pending'
import Completed from './ToDo/Completed'
import ProductApp from './ProductApp/ProductApp'
let App = () => {
  return <>
    <nav className='navbar navbar-dark bg-light navbar-expand-lg'>
      <a href='/'>ToDo App</a>
      {/* <a to='/ProductApp'> ProductApp</a> */}
    </nav>
    <Router>
    
      <Routes>
        
        <Route path="/completed" element={<Completed />} />
        <Route path="/pending" element={<Pending />} />
        {/* <Route path="/ProductApp" element={<ProductApp />} /> */}
      </Routes>
    </Router>
    
  </>
}
export default App