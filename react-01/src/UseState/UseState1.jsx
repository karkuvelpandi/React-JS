import React from 'react'
import { useState } from 'react'

function UseState1() {
    let [count,SetCount]=useState(0)
    let update=()=>{
        // SetCount(count+1)
        // SetCount(count+1)  Normal update method lead only one increment due to React bind all Mthods and execute at a time
            SetCount((a)=>a+1)   //To resolve this we use callBack fat arrow method inside the method SetCount
            SetCount((a)=>a+1)
            
    };


  return <><div>UseState1</div>
<h1 onClick={update}>Counter:{count}</h1>
  
  
  </>
    
  
}


export default UseState1