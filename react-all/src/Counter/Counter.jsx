import React from 'react'
import { useState } from 'react'

let Counter =()=>{
let [counter,SetCounter]=useState(0)

let increHandler =()=>{
    SetCounter(counter +1)
}

let decreHandler =()=>{
    SetCounter(counter -1)
    if(counter<=0){
        SetCounter(counter=0)
     }
}
     return <>
     <h1 >Counter : {counter}</h1>
     <button onClick={increHandler}>Incre</button>
     <button onClick={decreHandler}>Decre</button>
     </>
}
export default Counter