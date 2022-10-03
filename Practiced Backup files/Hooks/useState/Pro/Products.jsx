import React from "react"
import {useState} from "react"


let Products = ()=>{
    let [msg,setmsg]=useState("hello")
    let gmHandler=(a)=>{
        setmsg(a)
    }
    return <>
    <h1>Hi Iam Product Component</h1>
    <h1>message:{msg}</h1>
    <button onClick={gmHandler.bind(this,prompt)}>Click to update</button>


    </>
}
export default Products