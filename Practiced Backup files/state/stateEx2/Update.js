import React from "react"
import Msg from "./Msg"
class Update extends React.Component {
    state={
        message: "hi"
    };
    gmHandler=()=>{
this.setState({message:"Good Morning"});
    };
    gnHandler=()=>{
        this.setState({message:"Good Night"});
    };
    render() {

        return <div>
            <h3>Im the Update component</h3>
            <pre>Message={this.state.message}</pre>

            <button onClick={this.gmHandler}>Good Mornning</button>
            <button onClick={this.gnHandler}>Good Night</button>
            <hr />
            <Msg one={this.state}/>

        </div>
    }
}
export default Update