import React, { useState } from 'react'
import "./ToDo.css"
import Axios from 'axios'
import { useEffect } from 'react'
const Todolist = () => {
  const [task, settask] = useState({ todo: '', status: 'Pending' })
  const [store, setStore] = useState([])
  const [search, SetSearch] = useState('')
  const [disable, SetDisable] = useState(false)
  const [selectedTask, setSelectedTask] = useState({ todo: '', status: '', id: '' })
  const [editFlag, setEditflag] = useState(false)
  const [selectedID, setSelectedID] = useState()

/*******************Fetch and Update current changes **********************/

  let fetchTask = () => {
    Axios.get('http://localhost:3000/tasks')
      .then((response) => {
        setStore(response.data)
      })
      .catch(() => { })
  }
  
  useEffect(() => {
    fetchTask()
  }, [])

  const changehandler = (e) => {
    if (editFlag) {
      setSelectedTask({ ...selectedTask, [e.target.name]: e.target.value })
    }
    else {
      settask({ ...task, [e.target.name]: e.target.value })
    }
  }

/***************************Create new Task******************************/

  const addSubmitHandler = (e) => {
    e.preventDefault()
    let url = "http://localhost:3000/tasks"
    Axios.post(url, task)
      .then(() => {
        fetchTask()
        console.log("Task successfully submitted...!");
      })
      .catch(() => { })
    settask({ todo: '', status: 'Pending' })
    SetDisable(false)
    setSelectedTask([])
  }
  

 /***************************Delete Part ******************************/

  const deletehandler = (id) => {
    console.log(id);
    Axios.delete(`http://localhost:3000/tasks/${id}`)
      .then(() => {
        console.log("Task deleted sucessfully...!")
        fetchTask()
      })
      .catch(() => { })
  }

  /***************************Edit Part ******************************/

  const getEditData = (id) => {
    setSelectedID(id)
    Axios.get(`http://localhost:3000/tasks/${id}`)
      .then((response) => {
        setSelectedTask(response.data)
        SetDisable(true)
        setEditflag(true)
      })
      .catch(() => { })
  }
  const editSubmitHandler = (e) => {
    e.preventDefault()
    let url = `http://localhost:3000/tasks/${selectedID}`
    Axios.put(url, selectedTask)
      .then((response) => {
        fetchTask()
        setEditflag(false)
        SetDisable(false)
        console.log("Task edited successfully...!")
      })
      .catch(() => { })
  }


  return (
    <div className='container mt-5'>
      {/* <pre>{JSON.stringify(selectedTask)}</pre> */}
      <div className='row mx-auto'>
        <div className='col-md-8'>

          <div className='card border border-dark' >
            <div className='card-header bg-primary text-white'>
              <h1 className='text-center'>ToDo List</h1>
            </div>
            <div className='card-body'>
              <form >
                <div className='form-group'>
                  <input type='text' className='form-control' name='todo' value={editFlag ? selectedTask.todo : task.todo} onChange={changehandler}
                    placeholder='Enter Todo....' />
                </div>
                <div id="submit-button">
                  {
                    editFlag ? <button className='btn btn-success' onClick={editSubmitHandler} type='submit'>Edit</button> : <button className='btn btn-info' onClick={addSubmitHandler} type='submit'>Add</button>
                  }
                  {disable ? <div className='form-group' style={{ display: "inline-block" }}>
                    <select name='status' value={editFlag ? selectedTask.status : ""} onChange={changehandler} className='form-control-lg'>
                      <option>Select Status</option>
                      <option>Pending</option>
                      <option>Completed</option>
                    </select>
                  </div>
                    : null
                  }
                </div>
              </form>
            </div>
          </div>

          <div className=' mt-5 mb-3 d-md-flex align-items-center justify-content-center'>
            <button className='btn btn-outline-info mr-3' onClick={(e) => SetSearch(e.target.value)}>All tasks</button>
            <button className='btn btn-outline-info mr-3' value='Pending'
              onClick={(e) => SetSearch(e.target.value)}>Pending</button>
            <button className='btn btn-outline-info mr-3' value='Completed' onClick={(e) => SetSearch(e.target.value)
            }>Completed</button>
          </div>
          {Object.keys(store).length > 0 ? (<table className='table table-hover'>
            <thead>
              <tr>
                <th>I.D</th>
                <th>Status</th>
                <th>TODO's</th>
                <th>EDIT/DELETE</th>
              </tr>
            </thead>
            <tbody>
              {
                store.filter((val) => {
                  if (search === "") {
                    return val
                  }
                  else if (val.status.toLowerCase().includes(search.toLowerCase())) {
                    return val
                  }
                })
                  .map((task) => {
                    return (
                      <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.status}</td>
                        <td>{task.todo}</td>
                        <td>
                          {disable ? <i className='fas fa-edit mr-4' style={{ "color": "grey" }} disabled></i> : <i
                            className='fas fa-edit mr-4' onClick={getEditData.bind(this, task.id)}></i>}
                          <i className='fas fa-trash' onClick={deletehandler.bind(this, task.id)}></i>
                        </td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>) : null}



        </div>
      </div>
    </div>
  )
}

export default Todolist