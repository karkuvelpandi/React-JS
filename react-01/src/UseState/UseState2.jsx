

//This is an example of Updating array using usestate method

import React from 'react'
import { useState } from 'react'

function UseState2() {
// let [array, Setarray] = useState(initArray()) //Intead of write outer function and invok use Callback nothing but Fatarrow
    let [array, Setarray] = useState(() => {    //Here we use callback to prevent rerendering   
        console.log("Initializing array");
        let array = [];
        for (let i = 0; i <= 10; i++) {
            array.push(i)
        }
        return array;
    })
    let update = () => {
        Setarray([...array, 1])
    };


    return <><div>UseState2</div>
        <h1 onClick={update}>Counter:{array}</h1>


    </>


}


export default UseState2