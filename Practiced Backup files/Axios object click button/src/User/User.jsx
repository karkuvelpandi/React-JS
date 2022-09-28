import React from "react";
import Axios from "axios"

class User extends React.Component {
    state = {
        persons: {}
    }
    get_data = () => {
        Axios.get('https://dummyjson.com/users').then((resp) => { this.setState({ persons: resp.data }) }).catch(() => { })
    }
    render() {
        return <>
            <pre>{JSON.stringify(this.state.persons)}</pre>
            <button className="btn btn-danger" onClick={this.get_data}>click me</button>
            {/* <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <td>Id</td>
                                    <td>First</td>
                                    <td>Age</td>
                                    <td>Gender</td>
                                    <td>Email</td>
                                    <td>Image</td>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(this.state.persons).length > 0 ?
                                    <>
                                        {this.state.persons.users.map((p) => {
                                            <tr>
                                                <td>{p.id}</td>
                                                <td>{p.firstname}</td>
                                                <td>{p.age}</td>
                                                <td>{p.gender}</td>
                                                <td>{p.email}</td>
                                                <td><img src={p.image} alt="" /></td>
                                            </tr>

                                        })}

                                    </> : null}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
 */}


        </>
    }
}
export default User