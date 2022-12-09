import React from 'react'
import './TreeList.css'
import { useEffect } from 'react'
import { useState } from 'react'

const TreeList = (props) => {
    let [employees, setEmployees] = useState([])
    useEffect(() => {
        setEmployees(props.details)
    }, [props])
   
    let selectedEmployee=(emp)=>{
         props.getEmp(emp)
    }
    return <>
        {/* <pre>{JSON.stringify(employees)}</pre> */}
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col">
                    <h3>for search</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                     {
                        employees.length>0?<>
                        {
                            employees.map((emp)=>{
                            return <div className="card mt-1 listCard" key={emp.id} onClick={selectedEmployee.bind(this,emp)}>
                                <div className="col-md-2" style={{padding:0}}>
                                    <img src={emp.image} className="listImg"  alt="no-pic" />
                                </div>
                                <div className="col-md-10 mt-1" style={{padding:0}} >
                                    <p className='pcontent'><span className='phead'>Name : </span>{emp.name}</p>
                                    <p className='pcontent'><span className='phead'>ID : </span>{emp.id}</p>
                                    <p className='pcontent'><span className='phead'>Designation : </span>{emp.designation}</p>
                                    {/* <p className='pcontent'><span className='phead'>Team : </span>{emp.team}</p> */}

                                </div>
                            </div>
                            })
                        }
                        </>:<><h2>No data found...!</h2></>
                     }
                </div>
            </div>
        </div>
    </>
}

export default TreeList