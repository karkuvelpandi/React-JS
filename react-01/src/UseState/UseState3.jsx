

//This is an example of Updating Object using usestate method

import React from 'react'
import { useState } from 'react'

function UseState2() {

    let [obj, setObj] = useState({ a: 10, b: 20 })

    let modyfyObj = () => {
        setObj((prevobj) => {
            
            return { ...obj, a: prevobj.a + 2 }     //always use spread operator for array and object while updating the values.
        })                                          //other then value miss for non updating values
    };
    return <><div>UseState2</div>


        <h1 onClick={modyfyObj}>Counter:{obj.a}</h1>
        <h2>{obj.b}</h2>

    </>


}


export default UseState2