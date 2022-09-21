import React from "react"

class Message extends React.Component {
    // message = "hello"
    state = {
        message: "hello"

    }

    // updateMeassage() {                                  //Normal function not going to work we have to use
    //     console.log('hello button working');
    //     this.setState({ message: "good morning" });
    // }

    updateMeassage=() =>{                                  //If you want update your component data we Have to use state concept
        console.log('hello button working');
        this.setState({ message: "good morning" });
    }
    render() {
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <h2>Message Component</h2>
            <h3>Message={this.state.message}</h3>
            <button onClick={this.updateMeassage}>Good Morning</button>
        </div>
    }
}
export default Message

//If you want update your component data we Have to use state concept
//step 1 : Keep your class properties as State Object properties.  State={message:"Hello good morning"}
//Step 2 :To update State we have to use --setState() --Method from React.Component Only
//Step 3 :Invoke as Fat arrow function.

//How to print the Object in browser level ---{JSON.stringify(object)}