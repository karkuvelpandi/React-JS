import React from "react"

class Login extends React.Component {
    state = {
        username: "",
        email: ""
    }
    nameupdateHandler = (event) => {
        /*     console.log(event);
            console.log(event.target);
            console.log(event.target.value); */

        this.setState({
            username: event.target.value
        })
    }
    mailupdateHandler = (event) => {
        /* 
            console.log(event);
            console.log(event.target);
            console.log(event.target.value); */

        this.setState({
            email: event.target.value
        })
    } 
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-head">
                                <form action="" onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <input type="text" onChange={this.nameupdateHandler} className="form-control" placeholder="Username" /><br />
                                        <input type="text" onChange={this.mailupdateHandler} className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="card-body">
                                        <input type="submit" value="Submit" />
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    }
}
export default Login