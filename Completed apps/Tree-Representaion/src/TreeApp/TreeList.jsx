import React from 'react'
import './TreeList.css'
import { useEffect } from 'react'
import { useState } from 'react'

const TreeList = (props) => {
    let [employees, setEmployees] = useState([])
    const [searchName, setSearchName] = useState("")
    const [foundUser, setFoundUser] = useState([])

    useEffect(() => {
        setEmployees(props.details)
        setFoundUser(props.details)
    }, [props])

    let selectedEmployee = (emp) => {
        props.getEmp(emp)
    }

    let handleClick = () => {
        alert('Please fill the field')
    }

    let getData = (e) => {
        const keyword = e.target.value
        console.log(keyword)
        setSearchName(keyword)
    };

    let filterHandler = () => {
        if(!searchName){setFoundUser(employees)}
        if (searchName !== "") {
            const result = foundUser.filter((singleData) => {
                return (singleData.name.toLowerCase().includes(searchName.toLowerCase()) || singleData.designation.toLowerCase().includes(searchName.toLowerCase()))
            })
            setFoundUser(result)
        }
    }

    let refresh = () => {
        const searchName = ""
        if (searchName === "") {
            setFoundUser(employees)
        }
    };
    return <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col ">
                <div className='form-group'>
                <input
                    className='form-control'
                    type="search"
                    placeholder="Filter By Name/Role"
                    onChange={getData}
                    onFocus={refresh}
                    required />
                <input type="button" className='btn btn-primary' value='search' onClick={searchName === "" ? handleClick : filterHandler.bind(this, searchName)} /><br />
            </div></div></div>
            <div className="row">
                <div className="col-md-12">
                    {
                        foundUser.length > 0 ? <>
                            {
                                foundUser.map((emp) => {
                                    return <div className="card mt-1 listCard" key={emp.id} onClick={selectedEmployee.bind(this, emp)}>
                                        <div className="col-md-2" style={{ padding: 0 }}>
                                            <img src={emp.image} className="listImg" alt="no-pic" />
                                        </div>
                                        <div className="col-md-10 mt-1" style={{ padding: 0 }} >
                                            <p className='pcontent'><span className='phead'>Name : </span>{emp.name}</p>
                                            <p className='pcontent'><span className='phead'>ID : </span>{emp.id}</p>
                                            <p className='pcontent'><span className='phead'>Designation : </span>{emp.designation}</p>

                                        </div>
                                    </div>
                                })
                            }
                        </> : <><h2>No data found...!</h2></>
                    }
                </div>
            </div>
        </div>
    </>
}

export default TreeList