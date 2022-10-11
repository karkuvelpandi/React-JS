import React, { Component } from 'react'
import UserDetails from './UserDetails'
import UserList from './UserList'
import  Axios from 'axios'
class UserApp extends Component {
constructor(props){
    super(props);
    this.state={
        persons:{},
        userProfile:{}
    }
}
selFun=(user)=>{
    console.log(user.firstName)
    this.setState({userProfile:user})
}
componentDidMount=()=>{
    Axios.get('https://dummyjson.com/users')
    .then((response)=>{
        this.setState({persons:response.data})
    }).catch(()=>{})
}

    render() {
        return <>
            <h2>UserApp</h2>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {Object.keys(this.state.persons).length>0?<>
                            <UserList userData={this.state.persons} fun={this.selFun}/>
                        </>:null}
                        
                    </div>
                    <div className="col-md-4">
                        {Object.keys(this.state.userProfile).length>0?<>
                            <UserDetails UserDetails={this.state.userProfile} />
                        </>:null}
                        
                    </div>
                </div>
            </div>


        </>



    }
}

export default UserApp