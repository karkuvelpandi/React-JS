import React, { Component } from 'react'

class UserList extends Component {
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
            {/* {Object.keys(this.props).length > 0 ?
              <>
              {this.props.users.map((user)=>{
                return<tr>
                  <td>{user.id}</td>
                </tr>
              })}
              </> 
              
              : null} */}
          </tbody>
        </table>


      </div>
    )
  }
}

export default UserList