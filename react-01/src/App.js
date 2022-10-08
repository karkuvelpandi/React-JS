import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./Navbar/Navbar"
import ProductApp from "./ProductApp/ProductApp"
import ContactApp from './ContactApp/ContactApp'
import UseState1 from './UseState/UseState1'
import UseState2 from './UseState/UseState2'
import UseState3 from './UseState/UseState3'
let App=()=>{

    return <Router>
        <Navbar/>
        <Routes>
            <Route exact path='/ProductApp' element={<ProductApp/>}/>
            <Route exact path='/ContactApp' element={<ContactApp/>}/>
            <Route exact path='/UseState1' element={<UseState1/>}/>
            <Route exact path='/UseState2' element={<UseState2/>}/>
            <Route exact path='/UseState3' element={<UseState3/>}/>
        </Routes>
    </Router>
}
export default App