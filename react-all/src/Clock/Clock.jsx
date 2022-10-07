import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
let Clock = () => {
    let [currentTime, setcurrentTime] = React.useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setInterval(() => {
            setcurrentTime(new Date().toLocaleTimeString())
        }, [1000])
    }, [])
    return <>
        <div className="card">
            <div className="card-header">
                <h1>Digital-clock</h1>
            </div>
            <div className="card-body">
                <h1>{currentTime}</h1>
            </div>
        </div>
    </>
}
export default Clock