import React from "react"
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import Users from "./Users/Users"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Users" element={<Users/>} />
                    

                </Routes>

            </Router>

    

        </React.Fragment>
    }
}
export default App