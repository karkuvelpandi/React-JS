import React from "react";
class Message extends React.Component {

    message = "hello"

    GmHandler=() =>{ 
        this.message="hi"
    }

    GnHandler=()=>{ 
        this.message="welcome"
    }

    render() {
        return <div>   

           &nbsp;&nbsp; <button onClick={this.GmHandler}>GM</button>&nbsp;&nbsp;
                        <button onClick={this.GnHandler}>GN</button>

        </div>
    }
}
export default Message