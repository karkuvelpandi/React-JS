import React from "react"

class Login extends React.Component {
    render() {
        return <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-head">
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Username" /><br />
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-body">
                                <button className="btn btn-success ml">Login</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }
}
export default Login