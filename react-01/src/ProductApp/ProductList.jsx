import React from 'react'
import Axios from "axios"

let ProductList = (props) => {

   let selectedUser=(user)=>{
             console.log(user.id);
            props.selprofile(user);
   };

    return <>
        <div>ProductDetails</div>
        <pre>{JSON.stringify(props.userData.users)}</pre>
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <table className='table table-hover'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody className='bg-light '>
                          {Object.keys(props.userData).length>0?<>
                          {props.userData.users.map((user)=>{
                            return <tr key={user.id} onClick={selectedUser.bind(this,user)}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            
                            </tr>
                          })}
                          </>: null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}
export default ProductList