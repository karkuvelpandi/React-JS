import React from "react";
import Navbar from "./NAVBAR/Navbar";
import Services from "./Services/Services";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
class App extends React.Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/Services" >
                        <Services/>
                    </Route>

                </Switch>
            </Router>


            <h1>I am App</h1><br />

        </React.Fragment>
    }
}
export default App