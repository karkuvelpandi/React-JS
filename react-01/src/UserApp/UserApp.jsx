import React, { Component } from 'react'
import UserDetails from './UserDetails'
import UserList from './UserList'
import Axios from "axios"
class UserApp extends Component {
constructor(props){
    super(props);
    this.state={
        persons:{}
    }
}

componentDidMount=()=>{
Axios.get('https://dummyjson.com/users').then((resp)=>{
    this.setState({persons:resp.data})
}).catch()
}
    render() {


        return <>
        <pre>{JSON.stringify(this.state)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-8" id="UserList">
                    
                    <UserList users={this.state.persons.users}/>                                       {/* for UserList */}
                    
                    </div>
                    <div className="col-md-4" id="UserDetails">
                        <UserDetails/>                                           {/* for UserDetails */}
                    </div>
                </div>
            </div>
        </>
    }
}

export default UserApp