import React from 'react'
import "./App.css"
import ToDo from './ToDo/ToDo'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Pending from './ToDo/Pending'
import Completed from './ToDo/Completed'
let App = () => {
  return <>
    <nav className='navbar navbar-dark bg-light navbar-expand-lg'>
      <a href='/'>ToDo App</a>
    </nav>
    <Router>
    <ToDo />
      <Routes>
      
        <Route path="/completed" element={<Completed />} />
        <Route path="/pending" element={<Pending />} />
      </Routes>
    </Router>
    
  </>
}
export default App