import React from "react"

class Registration extends React.Component {
    Constructor(props) {
        this.state = {
            name: "Kar",
            email: "Karkuve",
            mobile: 5454
        }
    }
    updateHandler = (event) => {
        this.state({
            name: event.target.value
        })
    };
    
    render(){ 
    return <>
        <pre>{JSON.stringify(this.state)}</pre>;
        <from>
            User Name: <input type="type" onChange={this.updateHandler} /> <br /><br />;
            Email Id : <input type="email" onChange={this.updateHandler} /><br /><br />;
            Mobile No: <input type="number" onChange={this.updateHandler} /><br />;
            <button type="submit">Submit</button>
        </from>
    </>
    }
}


export default Registration