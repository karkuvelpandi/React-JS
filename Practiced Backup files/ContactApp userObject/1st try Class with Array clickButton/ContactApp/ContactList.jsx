import React from 'react'


class ContactList extends React.Component{
    getContact=(user)=>{
        console.log(user);
        this.props.method1(user)
    }
    render(){
        return<>
        <pre>{JSON.stringify(this.props)}</pre>
        <h1>ContactList</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Email</th>
                                <th>Website</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.data.length-1 >= 0?<>
                            {this.props.data.map((user)=>{
                              return<tr key={user.id} onClick={this.getContact.bind(this, user)}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.address.city}</td>
                                <td>{user.email}</td>
                                <td>{user.email.substr(user.email.indexOf("@")+1)}</td>
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
export default ContactList