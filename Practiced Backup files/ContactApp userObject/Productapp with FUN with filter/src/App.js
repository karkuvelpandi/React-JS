import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./Navbar/Navbar"
import ProductApp from './ProductApp/ProductApp'
import Search from './Search/Search'
let App=()=>{

    return <Router>
        
        <Navbar/>
        <Search/>
        <Routes>
            <Route exact path='/ProductApp' element={<ProductApp/>}/>
            
        </Routes>
    </Router>
}
export default App