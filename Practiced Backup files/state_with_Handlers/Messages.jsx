import React from "react";
class Messages extends React.Component {
    state = {
        msg: "hello"
    }
    gmHandler = () => {
        this.setState({ msg: "good morning" })

    }
    gnHandler = () => {
        this.setState({ msg: "good night" })
    }
    render() {
        return <div>
            <button onClick={this.msg}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }

}
export default Messages