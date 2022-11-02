import React from "react";
import { useState } from "react";
import Axios from 'axios'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Completed from "./Completed";
import Pending from "./Pending"

let ToDo = () => {
    let [tasks, setTask] = useState("");
    let [data, setData] = useState({})
    let [completeClick, setCompleteClick] =useState(false)
    let [pendingClick,setPendingClick]=useState(false)

    useEffect(() => {
        Axios.get('http://localhost:3000/activites')
            .then((response) => {
                setData(response.data)
            })
            .catch(() => { })
    }, [data])
    let submitTask = () => {
        Axios.post('http://localhost:3000/activites', tasks)
            .then((response) => {
                console.log(response)
                handleChange()
            })
            .catch(() => { })

    }
    let handleChange = (e) => {
        let newTask = { [e.target.name]: e.target.value }
        setTask(newTask)
    };

    return <>
        <pre>{JSON.stringify(tasks)}</pre>
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <pre>{JSON.stringify(completeClick)}</pre>
                    <input type="text" name="activities" placeholder="Add New Task" onChange={(e) => { handleChange(e) }} id="toDo" /><button className="btn" onClick={submitTask}>Add Task</button>
                </div>
                <div className="menu">
                    <ul>
                        <li onClick={()=>{setCompleteClick(true)}}><Link to='/all'>All</Link></li>
                        <li onClick={()=>{setCompleteClick(true)}}><Link to='/pending'>Pending</Link></li>
                        <li onClick={()=>{setCompleteClick(true)}}><Link to='/completed'>Completed</Link></li>

                    </ul>
                </div>
                <div className="card-body">
                    {
                        completeClick ?<>
                        <Completed />
                        </> : <> {pendingClick ?<Pending/>:  <table>
                        <thead>
                            <tr>
                                <td>Task Id</td>
                                <td>Task</td>
                                <td>Status</td>
                                <td>Modify</td>
                            </tr>        
                        </thead>
                        <tbody>
                            {data.length > 0 ? <>
                                {
                                    data.map((task) => {
                                        return <tr>
                                            <td>{task.id}</td>
                                            <td>{task.activities}</td>
                                            <td>{task.id}</td>
                                            <td><button>Edit</button><button>delete</button></td>
                                        </tr>
                                    })
                                }
                            </> : null}
                        </tbody>
                    </table> }
                       
                        </>
                    }

                </div>

            </div>
        </div>

    </>
};

export default ToDo