import { useState } from "react"
import React from 'react'

const RegForm = () => {
  let[emailErr,setEmailErr]=useState("")
  let [nameErr,SetNameErr]=useState("")
   
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
    validateFun(userDetails)
   
  }
  let validateFun=(value)=>{
    let name=value.name
    let email=value.email
    if(name==""){
        SetNameErr("please enter name" )
    }
    else if(name.length<=4 || name.length>=10){
        SetNameErr("please enter min 4 and max 10 character only" )
    }
    else if (name.length>=4 || name.length<=10) {
        SetNameErr("")
    }   
    if(email==""){
       setEmailErr("please enter email" )
   }
   else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email)) {
    setEmailErr('Invalid email address' ) 
  }
  else{
    setEmailErr("")
  }
   
  }
  
  

  return <>
    <pre>{JSON.stringify(userDetails)}</pre>
    <pre>{JSON.stringify(nameErr)}</pre>
    <pre>{JSON.stringify(emailErr)}</pre>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form action="" onSubmit={submitHandler}>
            <div className="form-group">
              <input type="text" className="form-control" name="name" onChange={getData} placeholder='Name' />
              <h4 className="text-danger">{nameErr}</h4>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="email" onChange={getData} placeholder='E-mail' />
              <h4 className="text-danger">{emailErr}</h4>
            </div>
            <div className="form-group">
              <input type="number" className="form-control" name="mobile" onChange={getData} placeholder='Mobile-Number' />
              <h4 className="text-danger"></h4>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="password" onChange={getData} placeholder='Password' />
              <h4 className="text-danger"></h4>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name="conformPassword" onChange={getData} placeholder='Conform-Password' />
              <h4 className="text-danger"></h4>
            </div>
            <input type="submit" value="Register" className='btn btn-success' />
          </form>
        </div>
      </div>
    </div>
  </>
}

export default RegForm