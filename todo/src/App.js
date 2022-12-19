import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  let[task,setTask]=useState([])
  
  let getdata=(e)=>{
    let value=e.target.value
      setTask(value)
  }
  let submitHandler=(e)=>{
  e.preventDefault()
    localStorage.setItem("tasklist",task)

  }
 

  return <>
    <pre>{JSON.stringify(task)}</pre>
    <form onSubmit={submitHandler}>
       <input type="text" onChange={getdata} name="task"/>
       <input type="submit" value="submit"/>
      
    </form>
    </>
}

export default App;
