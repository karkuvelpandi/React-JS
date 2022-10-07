import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./Navbar/Navbar"
import ProductApp from "./ProductApp/ProductApp"
import ContactApp from './ContactApp/ContactApp'
let App=()=>{

    return <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/ProductApp' element={<ProductApp/>}/>
            <Route exact path='/ContactApp' element={<ContactApp/>}/>
        </Routes>
    </Router>
}
export default App