import React from 'react'
import {useState} from 'react'

let UseState= ()=>{
let [Msg,setMsg]=useState("Hi")

let updateHandler=(a)=>{
     setMsg(a)
}
    return <>
    <h1>Hi man iam UseState component</h1>
    <h1>Message : {Msg}</h1>
    <button onClick={updateHandler.bind(this,prompt)}>Click to change</button>
    </>
}
export default UseState