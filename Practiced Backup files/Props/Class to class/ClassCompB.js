import React from "react";

class ClassCompB extends React.Component{
    render(){
        return <div>
            <h3>Im class component B</h3>

            <pre>{JSON.stringify(this.props)}</pre>
            <h3>EmployeeId={this.props.id}</h3>
            <h3>Employee location={this.props.location[1]}</h3>
            <h1>Name={this.props.details.name}</h1>
        </div>
    }
}

export default ClassCompB