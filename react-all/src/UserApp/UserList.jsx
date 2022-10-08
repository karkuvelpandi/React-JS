import React, { Component } from 'react'

class UserList extends Component {
    selectedData=(user)=>{
        console.log(user);
        this.props.fun(user)
    }
    render() {
        return <>
            <div>UserList</div>
            <pre>{JSON.stringify(this.props)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <table className='table table-hover'>
                            <thead className='bg-primary'>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>DOB</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(this.props.userData).length >0 ?<>
                                {this.props.userData.users.map((user)=>{
                                    return <tr key={user.id} onClick={this.selectedData.bind(this,user)}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.birthDate}</td>
                                        <td><img src={user.image} height="60px" alt="" /></td>
                                    </tr>
                                })}
                                
                                </>:null}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    }
}

export default UserList