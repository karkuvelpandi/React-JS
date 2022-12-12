import React from 'react'
import TreeList from './TreeList'
import TreeDetails from './TreeDetails'
import Data from './data.json'
import { useState } from 'react'
import { useEffect } from 'react'

const TreeApp = () => {
    let [data, setData] = useState([])
    let [selectedEmp, setSelectedEmp] = useState({})
    useEffect(() => {
        setData(Data)
    }, [])
   
    let updateOneEmp = (emp) => {
        setSelectedEmp(emp)
         console.log("Detail sent...")
    }
    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <TreeList details={data} getEmp={updateOneEmp} />
                </div>
                <div className="col-md-9">
                  <TreeDetails wholeData={data} singleData={selectedEmp}/>
                </div>
            </div>
        </div>
    </>
}

export default TreeApp