import React from 'react'
import { useState } from 'react'
let ProductList = (props) => {

    let selectedUser = (user) => {
        console.log(user.id);
        props.selprofile(user);
    };

    //Search Operation Part
    const dataArray = props.userData.data.users
    const [searchName, setSearchName] = useState("")
    const [foundUser, setFoundUser] = useState(dataArray)

    let getData = (e) => {
        const keyword = e.target.value
        console.log(keyword)
        setSearchName(keyword)
    };

    let filter = () => {
        if (searchName !== "") {
            const result = foundUser.filter((singleData) => {

                return singleData.firstName.toLowerCase().startsWith(searchName.toLowerCase())

            })

            setFoundUser(result)
        }
        if (searchName == "") {
            setFoundUser(dataArray)
        }
    };
    let refresh = () => {
        const searchName = ""
        if (searchName == "") {
            setFoundUser(dataArray)
        }
    };

    return <>
        <div>Product List</div>
        <pre>{JSON.stringify(props)}</pre>
        <div className="container">
            <div className="row">

                <input
                    type="search"
                    value={searchName}
                    placeholder="Filter By Name"
                    onChange={getData}      
                />
                <input type="button" value='search' onClick={filter.bind(this, searchName)} />
                <input type="button" value='refresh' onClick={refresh.bind(this, searchName)} />


            </div>
        </div><br />

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

                            {foundUser.length > 0 ? (

                                foundUser.map((user) => {
                                    return <tr key={user.id} onClick={selectedUser.bind(this, user)}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                    </tr>
                                })
                            ) : (
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