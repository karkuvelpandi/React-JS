import React from "react";
import Axios from "axios"

class User extends React.Component {
    constructor(props){
        super(props)
       this.state = {
            persons: {}
        }
    }
  
  /* get_data  */componentDidMount= () => {
        Axios.get('https://dummyjson.com/users')
        .then((resp) => { this.setState({ persons: resp.data }) })
        .catch(() => { })
    }
    render() {
        return <>
            <pre>{JSON.stringify(this.state.persons.users)}</pre>
            <button className="btn btn-danger" onClick={this.get_data}>click me</button>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-dark">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Id</th>
                                    <th>First</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                
                                Object.keys(this.state.persons).length > 0 ?
                                    <>{/* <h1>hello</h1> */}
                                        {this.state.persons.users.map((per) => {
                                           return <tr>
                                                <td>{per.id}</td>
                                                <td>{per.firstname}</td>
                                                <td>{per.age}</td>
                                                <td>{per.gender}</td>
                                                <td>{per.email}</td>
                                                <td><img src={per.image} height="50px" alt="" /></td>
                                            </tr>

                                        })}

                                    </> : null}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>



        </>
    }
}
export default User