import React, { Component } from 'react'

class UserList extends Component {
  sel_user=(user)=>{
    console.log(user);
    this.props.userDetails(user)
  }
  render() {
    return (

      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.users).length > 0 ?
              <>
              {this.props.users.users.map((user,index)=>{
                return<tr key={index} onMouseOver={this.sel_user.bind(this, user)}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td><img src={user.image} alt="" height="50px" /></td>
                </tr>
              })}
              </> 
              
              : null}
          </tbody>
        </table>


      </div>
    )
  }
}

export default UserList