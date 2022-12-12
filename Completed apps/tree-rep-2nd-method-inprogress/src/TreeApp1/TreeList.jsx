import React from 'react'
import './TreeList.css'
import { useEffect } from 'react'
import { useState } from 'react'

const TreeList = (props) => {
    const [employees, setEmployees] = useState([])
    const [searchName, setSearchName] = useState("")
    const [foundEmployee, setFoundEmployee] = useState([])
    const [element, setElement] = useState([])

    useEffect(() => {
        setEmployees(props.details)
        setFoundEmployee(props.details)
        iterateFunction(foundEmployee)
    }, [props, foundEmployee])

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
        if (!searchName) { setFoundEmployee(employees) }
        if (searchName !== "") {
            const result = foundEmployee.filter((singleData) => {
                return (singleData.name.toLowerCase().includes(searchName.toLowerCase()) || singleData.designation.toLowerCase().includes(searchName.toLowerCase()))
            })
            setFoundEmployee(result)
        }
    }

    let refresh = () => {
        const searchName = ""
        if (searchName === "") {
            setFoundEmployee(employees)
        }
    };


    let iterateFunction = (foundEmployee) => {
        foundEmployee.map((foundEmp) => {
           
            for (let employee in foundEmp) {
                
                if (typeof (foundEmployee[employee]) === "object") {
                    iterateFunction()
                }
                else{
                    setElement(foundEmp)
                }
            }
            setElement(foundEmp)
        })
    }


    return <>
        <div className="container-fluid mt-5">
            <pre>{JSON.stringify(element)}</pre>
            <div className="row">
                <div className="col ">
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type="search"
                            // value={searchName}
                            placeholder="Filter By Name"
                            onChange={getData}
                            onFocus={refresh}
                            required />
                        <input type="button" className='btn btn-primary' value='search' onClick={searchName === "" ? handleClick : filterHandler.bind(this, searchName)} /><br />
                    </div></div></div>
            <div className="row">
                <div className="col-md-12">
                    {
                        element.length > 0 ? <>
                            {
                                // element
                                element.map((foundEmp) => {
                                    return <div className="card mt-1 listCard" key={foundEmp.id} onClick={selectedEmployee.bind(this, foundEmp)}>
                                        <div className="col-md-2" style={{ padding: 0 }}>
                                            <img src={foundEmp.image} className="listImg" alt="no-pic" />
                                        </div>
                                        <div className="col-md-10 mt-1" style={{ padding: 0 }} >
                                            <p className='pcontent'><span className='phead'>Name : </span>{foundEmp.name}</p>
                                            <p className='pcontent'><span className='phead'>ID : </span>{foundEmp.id}</p>
                                            <p className='pcontent'><span className='phead'>Designation : </span>{foundEmp.designation}</p>

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