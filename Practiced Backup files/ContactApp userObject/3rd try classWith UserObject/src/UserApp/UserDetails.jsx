import React, { Component } from 'react'

class UserDetails extends Component {
  render() {
    return <>
    
    <pre>{JSON.stringify(this.props)}</pre>
    <div className="card">
      <div className="card-header">
        <img src={this.props.contact.image} alt="img" height='100px'/>
      </div>
      <div className="card-body">
        <h5>ID : <b>{this.props.contact.id}</b></h5>
        <h5>Name : <b>{this.props.contact.firstName + " " + this.props.contact.lastName}</b></h5>
        <h5>Age : <b>{this.props.contact.age}</b></h5>
        <h5>Gender : <b>{this.props.contact.gender}</b></h5>
      </div>
    </div>
    </>
  }
}

export default UserDetails