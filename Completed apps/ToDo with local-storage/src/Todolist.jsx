import React, { useState } from 'react'
import { useEffect } from 'react'
import "./ToDo.css"

const Todolist = () => {

  let getLocalDate = () => {
    let list = localStorage.getItem("store")
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }
  const [formvalues, setFormvalues] = useState({ todo: '', status: 'Pending' })
  const [store, setStore] = useState(getLocalDate())
  const [search, SetSearch] = useState('')
  const [disable, SetDisable] = useState(false)
  const [editFlag, setEditflag] = useState(false)
  // const [selectedTask, setSelectedTask] = useState({ todo: '', status: '', id: '' })

  const changehandler = (e) => {
    setFormvalues({ ...formvalues, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    localStorage.setItem("store", [JSON.stringify(store)])
  }, [store])

  const submithandler = (e) => {
    e.preventDefault()
    console.log(formvalues)
    const newstore = [...store, formvalues]
    setStore(newstore)

    setFormvalues({ todo: '', status: 'Pending' })
    SetDisable(false)
    setEditflag(false)
  }
  const deletehandler = (indexvalue) => {
    const filteredstore = store.filter((elem, index) => index !== indexvalue)
    setStore(filteredstore)
  }
  const edithandler = (editindexvalue) => {
    const filteredstore = store.filter((elem, index) => index !== editindexvalue)
    setStore(filteredstore)
    const editselector = store.find((elem, index) => index === editindexvalue)
    setFormvalues({
      todo: editselector.todo,
    })
    SetDisable(true)
    setEditflag(true)
  }

  return (
    <div className='container mt-5'>
      <div className='row mx-auto row1'>
        <div className='col-md-8'>

          <div className='card border border-dark' >
            <div className='card-header bg-dark text-white'>
              <h1 className='text-center'>ToDo List</h1>
            </div>
            <div className='card-body'>
              <form onSubmit={submithandler}>
                <div className='form-group'>
                  <input type='text' className='form-control' name='todo' value={formvalues.todo} onChange={changehandler}
                    placeholder='Enter Todo....' />
                </div>
                <div id="submit-button">
                  {
                    editFlag ? <button className='btn btn-success' onClick={edithandler} type='submit'>Edit</button> : <button className='btn btn-info' onClick={submithandler} type='submit'>Add</button>
                  }
                  {disable ? <div className='form-group' style={{ display: "inline-block" }}>
                    <select name='status' onChange={changehandler} className='form-control-lg'>
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
            <button className='btn btn-outline-dark mr-3' onClick={(e) => SetSearch(e.target.value)}>All tasks</button>
            <button className='btn btn-outline-dark mr-3' value='Pending'
              onClick={(e) => SetSearch(e.target.value)}>Pending</button>
            <button className='btn btn-outline-dark mr-3' value='Completed' onClick={(e) => SetSearch(e.target.value)
            }>Completed</button>
          </div>
          {Object.keys(store).length > 0 ? (<table className='table table-dark text-center'>
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
                  .map((task, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{task.status}</td>
                        <td>{task.todo}</td>
                        <td>
                          {disable ? <i className='fas fa-edit mr-4' style={{ "color": "grey" }} disabled></i> : <i
                            className='fas fa-edit mr-4' onClick={() => edithandler(index)}></i>}
                          <i className='fas fa-trash' onClick={() => deletehandler(index)}></i>
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