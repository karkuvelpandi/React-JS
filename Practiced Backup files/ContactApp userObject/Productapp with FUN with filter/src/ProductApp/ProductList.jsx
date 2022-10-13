import React from 'react'
import {useState} from 'react'
let ProductList = (props) => {

   let selectedUser=(user)=>{
             console.log(user.id);
            props.selprofile(user);
   };

   //Search Operation Part
   /* const [firstName, setName] = useState(''); */
   const [foundUsers, setFoundUsers] = useState(props.userData.data.users);
   const [searchName, setSearchName] = useState('')

   let getInputData = (e)=>{
    console.log(e.target.value);
    let keyword = e.target.value;
    setSearchName(keyword);

   }
    const filter = (e) => {
    const keyword = e
    console.log(keyword)
    if (keyword !== '') {
        const results = foundUsers.filter((singleproduct) => {
            return singleproduct.firstName.toLowerCase().startsWith(keyword.toLowerCase()); 
            // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundUsers(results);
    } 
    else if (keyword === ''){
        setFoundUsers(props.userData.data.users);
        // If the text field is empty, show all users
            }
    
           /*  setName(keyword); */
    
    };
  /*  let searchFun= (e)=>{e.target.value} */

    return <>
        <div>Product List</div>
        <pre>{JSON.stringify(props)}</pre>
        <pre>{searchName}</pre>
        <div className="container">
            <pre>{JSON.stringify(foundUsers)}</pre>
            <input
                type="search"
                value={searchName}
                onInput={getInputData}
                className="input"
                placeholder="Filter"
            /><input type="button" value="Search" onClick={filter.bind(this,searchName)} />
            </div>
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
                            
                          {foundUsers && foundUsers.length > 0 ? (
                          
                          foundUsers.map((user)=>{
                            return <tr key={user.id} onClick={selectedUser.bind(this,user)}>
                                <td>{user.id}</td>
                                <td>{user.firstName}</td>
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>
                            </tr>
                          })
                          ): (
                            <h1>No results found!</h1>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}
export default ProductList