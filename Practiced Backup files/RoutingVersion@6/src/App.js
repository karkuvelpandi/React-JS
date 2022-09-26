import React from "react"
import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/Home" element={<Home/>} />
                    

                </Routes>

            </Router>

            <h1>Iam App</h1>

        </React.Fragment>
    }
}
export default App