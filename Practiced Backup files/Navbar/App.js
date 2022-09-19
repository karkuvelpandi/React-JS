import React from "react";
import Navbar from "./Navbar/Navbar";
import Employee from "./AccessVariables-C-F/Employee"
import User from "./AccessVariables-C-F/User"

class App extends React.Component {
    constructor(props) {                      //Always constructor Going to execute first
        super(props);
        console.log("hello im constructor");
    }
    render() {
        console.log("rander methood execute second");
        return <div>
            <h1>hello im from app</h1>
            <Navbar />
            <Employee />
            <hr />
            <User />
        </div>
    }
}
export default App