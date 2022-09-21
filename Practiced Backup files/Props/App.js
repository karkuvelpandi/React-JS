import React from "react"
// import Message from "./State/Message"
// import Update from "./stateEx2/Update"
import User from "./stateEx3/User"

class App extends React.Component {
    render() {
        return <div>
            <h1>I am app component</h1>
            <hr/>
            <User/>
        </div>
    }
}

export default App