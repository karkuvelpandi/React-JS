import React from "react"

class Message extends React.Component {
    state = {
        message: "Hi"
    }
    gmHandler = () => {this.setState({message: "Good morning"})
    };
    gaHandler = () => {this.setState({ message: "Good afternoon",name: "Pandi"})
    };
    gnHandler = () => { this.setState({ message: "Good Night", name: "Pandi" })
    };
    render() {
        return <>
            <h3>Iam Message Component</h3>
            <h1>Name ={this.state.name}</h1>
            <h1>Message={this.state.message}</h1>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.gnHandler}>GN</button>

        </>
    }
}
export default Message