import React, { Component } from 'react'

class UserDetails extends Component {
    render() {
        return <><div>UserDetails</div>
            <pre>{JSON.stringify(this.props)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="card">
                            <div className="card-header">
                                <img width='200px' src={this.props.UserDetails.image} alt="" />
                            </div>
                            <div className="card-body">
                                <ul key={this.props.UserDetails.id}>
                                    <li>Name :{this.props.UserDetails.firstName}</li>
                                    <li>Email :{this.props.UserDetails.email}</li>
                                    <li>DOB :{this.props.UserDetails.birthDate}</li>
                                    <li>Gender :{this.props.UserDetails.gender}</li>
                                    <li>City :{this.props.UserDetails.address.city}</li>
                                    <li>Phone no :{this.props.UserDetails.phone}</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>



    }
}

export default UserDetails