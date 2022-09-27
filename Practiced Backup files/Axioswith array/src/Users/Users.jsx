import React, { Component } from 'react'
import Axios from 'axios'
class Users extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/photos').then((resp) => { this.setState({ users: resp.data }) }).catch(() => { })
    }
    render() {
        return (
            <div>
                <h1>Users Compo</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                {<button onClick={this.getData}>Click me...!</button>}

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <table className='table table-stripped'>
                                <thead className='bg-dark text-white'>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Thumnail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.users.length > 0 ? <>
                                            {this.state.users.map((user) => {
                                                return <tr>
                                                    <td>{user.id}</td>
                                                    <td>{user.title}</td>
                                                    <td><img src={user.thumbnailUrl} alt="" width="30px" /></td>
                                                </tr>
                                            })}
                                        </> : null
                                    }
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Users