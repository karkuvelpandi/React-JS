import React from "react";
import Login from "./Login/Login"
class App extends React.Component{
    render(){
        return<React.Fragment>
            <h1>I am App</h1><br/>
            <Login/>
        </React.Fragment>
    }
}
export default App