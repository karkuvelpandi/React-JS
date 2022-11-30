import { useState } from "react"
import React from 'react'

const RegForm = () => {
  let [formError,SetformError]=useState({})
  let [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    conformPassword: ""
  })

  let getData = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value })
  }
  let submitHandler = (e) => {
    e.preventDefault()
    SetformError(validateFun(userDetails))
     
  }
  let validateFun=(values)=>{
    if(!values.name){
      formError.name="please enter name" 
    }
  }

  return <>
    <pre>{JSON.stringify(userDetails)}</pre>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form action="" onSubmit={submitHandler}>
            <div className="form-group">
              <input type="text" className="form-control" name="name" onChange={getData} placeholder='Name' />
              <h3 className="text-danger">{formError.name}</h3>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" name="email" onChange={getData} placeholder='E-mail' />
            </div>
            <div className="form-group">
              <input type="mobile" className="form-control" name="mobile" onChange={getData} placeholder='Mobile-Number' />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" onChange={getData} placeholder='Password' />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="conformPassword" onChange={getData} placeholder='Conform-Password' />
            </div>
            <input type="submit" value="Register" className='btn btn-success' />
          </form>
        </div>
      </div>
    </div>
  </>
}

export default RegForm