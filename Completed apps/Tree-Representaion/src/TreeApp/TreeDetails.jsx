import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './TreeDetails.css'
const TreeDetails = (props) => {
    let [data, setData] = useState([])
    let [singleData, setSingleData] = useState([])
    useEffect(() => {
        setData(props.wholeData)
        setSingleData(props.singleData)
    }, [props])
    return <>
        <pre>{JSON.stringify(data)}</pre>
        <pre>{JSON.stringify(singleData)}</pre>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    {
                        Object.keys(singleData).length > 0 ? <>
                            <div className="card detailCard">
                                <div className="card-header" id="detailsC-head">
                                    <center><img src={singleData.image} className="detailImage" alt="no-pic" /></center>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item"><b>Name : </b>{singleData.name}</li>
                                        <li className="list-group-item"><b>Id : </b>{singleData.id}</li>
                                        <li className="list-group-item"><b>Designation : </b>{singleData.designation}</li>
                                        {singleData.id === 101 ? null : <li className="list-group-item"><b>Team : </b>{singleData.team}</li>}
                                    </ul>
                                </div>
                            </div>
                        </> : <h3 style={{ marginTop: "200px", marginLeft: "150px", padding: 0, outline: "1px solid red" }}>Select Your Professional</h3>
                    }

                </div>
                <div className="col-md-8">
                    <div className="container-fluid" style={{ boxSizing: "border-box" }}>
                        <div className="row">
                            <div className="col">
                                <div className="card">sdf</div>
                            </div>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="horizontalLine"></div>
                        <div className="row">
                            <div className="col">
                                <div className="card">sdf</div>
                                <div className="card">sdf</div>
                                <div className="card">sdf</div>
                            </div>
                        </div>
                        <div className="verticalLine"></div>
                        <div className="horizontalLine"></div>
                        <div className="row">
                            <div className="col">
                                <div className="card">sdf</div>
                                <div className="card">sdf</div>
                                <div className="card">sdf</div>
                                <div className="card">sdf</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card"></div>
                                <div className="card"></div>
                                <div className="card"></div>
                                <div className="card"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card"></div>
                                <div className="card"></div>
                                <div className="card"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">

            </div>
        </div>
    </>
}

export default TreeDetails