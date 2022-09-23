import React from "react"

class Message extends React.Component {
    state = {
        message: "Hi"
    }
  /*   gmHandler = () => {this.setState({message: "Good morning"})
    };
    gaHandler = () => {this.setState({ message: "Good afternoon",name: "Pandi"})
    };
    gnHandler = () => { this.setState({ message: "Good Night", name: "Pandi" })
    }; */

updateMessage=(value,name)=>{
this.setState({message:value , Name:name})
};


    render() {
        return <>

            <h3>Iam Message Component</h3>
            <h1>Name ={this.state.Name}</h1>
            <h1>Message={this.state.message}</h1>
            <button onClick={this.updateMessage.bind(this,"Good Morning","PK")}>GM</button>
            <button onClick={this.updateMessage.bind(this,"Good Afternoon","PK")}>GA</button>
            <button onClick={this.updateMessage.bind(this,"Good Night","PK")}>GN</button>

        </>
    }
}
export default Message