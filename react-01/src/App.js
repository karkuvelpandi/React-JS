import React from "react";
import Navbar from "./Navbar/Navbar"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import UserApp from "./UserApp/UserApp";
class App extends React.Component{
    render(){
        return<>
       <Router>
       <Navbar/>
       <Routes>
        <Route path="/UserApp" element={<UserApp/>}></Route>
       </Routes>
       </Router>
        
        </>
    }
}
export default App