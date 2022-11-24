import React from 'react'
import "./App.css"
import ToDo from './ToDo/ToDo'
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pending from './ToDo/Pending'
import Completed from './ToDo/Completed'
let App = () => {
  return <>
    <nav className='navbar navbar-dark bg-light navbar-expand-lg'>
      <a href='/todo'>ToDo App</a>
       <a to='/todo'> main</a> 
    </nav>
    <Router>
    
      <Routes>
        
        <Route path="/completed" element={<Completed />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/todo" element={<ToDo />} /> 
      </Routes>
    </Router>
    
  </>
}
export default App