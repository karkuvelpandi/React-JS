import React, { Component } from 'react'
import UserDetails from './UserDetails'
import UserList from './UserList'
import Axios from "axios"
class UserApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: {},
            contacts: {}
        }
    }

    selUser = (user) => {
        console.log(user.firstName)
        this.setState({ contacts: user })
    }

    componentDidMount = () => {
        Axios.get('https://dummyjson.com/users').then((resp) => {
            this.setState({ persons: resp.data })
        }).catch()
    }
    render() {


        return <>
            <h1>Contact App</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-8" id="UserList">
                        <h1>Contact Details</h1>
                        <UserList users={this.state.persons} userDetails={this.selUser} />                                       {/* for UserList */}

                    </div>
                    <div className="col-md-4" id="UserDetails" >
                        <h1>Contact Details</h1>
                        {Object.keys(this.state.contacts).length > 0 ?
                            <>

                                <UserDetails contact={this.state.contacts} />
                            </> : null
                        }
                        {/* for UserDetails */}
                    </div>
                </div>
            </div>
        </>
    }
}

export default UserApp