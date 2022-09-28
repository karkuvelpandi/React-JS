import React from "react"
import Axios from "axios"
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import User from "./User/User"
import Services from "./Service/Services"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
class App extends React.Component {

    render() {
        return <>
         <Router>
         <Navbar />
            <Routes>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/User" element={<User/>}></Route>
                <Route path="/Service" element={<Services/>}></Route>
            </Routes>
        </Router>

        </>
    }
}
export default App