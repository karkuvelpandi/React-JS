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
                        </> : <h3 style={{ marginTop: "100px", marginLeft: "50px", padding: 0, background: "lime", height: "40px" }}>&#128072;Select Employee...</h3>
                    }

                </div>
                <div className="col-md-8">
                    <div className="container-fluid" style={{ boxSizing: "border-box" }}>
                        <div className="row row-flex">
                            <div className="card card1">
                                <img src="" alt="no pic" />
                            </div>
                        </div>
                        <div className="v-line-sm"></div>
                        <div className="h-line-lg"></div>
                        <div className="row">
                            <div className="v-line-sm"></div>
                            <div className="v-line-sm"></div>
                            <div className="v-line-sm"></div>
                        </div>
                        <div className="row row1">
                                <div className="card card1">sdf</div>
                                <div className="card card1">sdf</div>
                                <div className="card card1">sdf</div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 row2">
                            <div className="v-line-sm"></div>
                            <div className="card card1">

                            </div>
                            </div>
                            <div className="col-md-4 row2">
                            <div className="v-line-sm"></div>
                            <div className="card card1">

                            </div>
                            </div>
                            <div className="col-md-4 row2">
                            <div className="v-line-sm"></div>
                            <div className="card card1">

                            </div>
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