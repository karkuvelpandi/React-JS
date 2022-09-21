import React from "react"

class Employee extends React.Component {
    render() {
        return <div>
            <h1>Employee components</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h1>Nearby city ={this.props.one[1]}</h1>
        </div>
    }
}
export default Employee