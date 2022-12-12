import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './TreeDetails.css'

const TreeDetails = (props) => {

    let [empData, setEmpData] = useState([])
    let [singleData, setSingleData] = useState([])
    let [ceoClick, setCeoClick] = useState(false)
    let [ctoClick, setCtoClick] = useState(false)
    let [cboClick, setCboClick] = useState(false)
    let [cfoClick, setCfoClick] = useState(false)

    useEffect(() => {
        setEmpData(props.wholeData)
        setSingleData(props.singleData)
    }, [props])

    let teamBindHandler = (name) => {
        if (name === 'Jas John') {
            setCeoClick(!ceoClick)
        }
        if (ceoClick) {
            if (name === "Leo Six") {
                setCtoClick(!ctoClick)
            }
            else if (name === "Diala Sho") {
                setCboClick(!cboClick)
            }
            else if (name === "Tab Han") {
                setCfoClick(!cfoClick)
            }
        }
        else if (!ceoClick) {
            setCtoClick(false)
            setCboClick(false)
            setCfoClick(false)
        }
    }

    return <>
        <div className="container-fluid mt-5" >
            <div className="row" style={{ display: "flex", justifyContent: "center"}}>
               <div className="row">
                <div className="col-md-12">
                     <h1 style={{color:'whitesmoke',textShadow:"5px 5px black" }}>Employee Organization Chart</h1>
                
                    {
                        Object.keys(singleData).length > 0 ? <>
                            <div className="card detailCard" >
                                <div id="detailsC-head">
                                    <center key={singleData.id}><img src={singleData.image} className="detailImage" alt="no-pic" /></center>
                                </div>
                                <div >
                                    <ul  className="list-group" style={{ minWidth: "300px" }}>
                                        <li className="list-group-item"><b>Name : </b>{singleData.name}</li>
                                        <li className="list-group-item"><b>Id : </b>{singleData.id}</li>
                                        <li className="list-group-item"><b>Designation : </b>{singleData.designation}</li>
                                        {singleData.id === 101 ? null : <li className="list-group-item"><b>Team : </b>{singleData.team}</li>}
                                        {singleData.id === 101 ? <button className='btn btn-success' style={{ padding: "12px" }} onClick={teamBindHandler.bind(this, singleData.name)}>Click to view team</button> : null}
                                    </ul>
                                </div>
                            </div>
                        </> : <div style={{ height: "340px" }}><h3 id="clickNote" >&#128072;Select Employee...<p>Click CEO to view Organization chart</p></h3></div>
                    }
                </div></div>
            </div>

            {empData.length > 0 ? <>
                <div className="row mt-5" >
                    <div className="col-md-12">
                        <div className="row row-flex" style={ceoClick ? null : { display: "none" }}>
                            <div className="card1 card11">
                                {empData.map((dat)=>{
                                    if (dat.id === 101) {
                                        return <>
                                            <center key={dat.id} onClick={teamBindHandler.bind(this, dat.name)}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                            </center>
                                        </>
                                    }
                                   })
                                   }
                            </div>
                        </div>
                        <div className="v-line-sm" style={ceoClick ? null : { display: "none" }} ></div>
                        <div className="h-line-lg" style={ceoClick ? null : { display: "none" }} ></div>
                        <div className="row">

                            <div className="col-md-4 row5" >
                                <div className="v-line-sm" style={ceoClick ? null : { display: "none" }}></div>
                                <div className="card card1 card11" style={ceoClick ? null : { display: "none" }}>
                                    {empData.map((dat) => {
                                        if (dat.id === 102) {
                                            return <>
                                                <center key={dat.id} onClick={teamBindHandler.bind(this, dat.name)}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                </center>
                                            </>
                                        }
                                    })}
                                </div>
                                <center>
                                    <div style={(ctoClick && ceoClick) ? null : { display: "none" }}>
                                        <div className="v-line-sm"></div>
                                        <div className="card card1 ">
                                            {empData.map((dat) => {
                                                if (dat.id === 108) {
                                                    return <>
                                                        <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                            <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                            <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                        </center>
                                                    </>
                                                }
                                            })}
                                        </div>
                                        <div className="v-line-xsm"></div>
                                        <div className="split-line-sm" ></div>
                                        <div className="row4" style={{ position: "relative" }}>
                                            <div className="card card1">
                                                {empData.map((dat) => {
                                                    if (dat.id === 106) {
                                                        return <>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </>
                                                    }
                                                })}
                                            </div>
                                            <div className="card card1">
                                                {empData.map((dat) => {
                                                    if (dat.id === 107) {
                                                        return <>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </>
                                                    }
                                                })}
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", gap: "2rem", position: "relative" }}>
                                            <div >
                                                <div className="v-line-sm"></div>
                                                <div className="card card1">
                                                    {empData.map((dat) => {
                                                        if (dat.id === 105) {
                                                            return <>
                                                                <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                                </center>
                                                            </>
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="v-line-sm"></div>
                                                <div className="card card1">
                                                    {empData.map((dat) => {
                                                        if (dat.id === 109) {
                                                            return <>
                                                                <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                                </center>
                                                            </>
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </center>

                            </div>

                            <div className="col-md-4 row5">
                                <div className="v-line-sm" style={ceoClick ? null : { display: "none" }}></div>
                                <div className="card card1 card11" style={ceoClick ? null : { display: "none" }}>
                                    {empData.map((dat) => {
                                        if (dat.id === 111) {
                                            return <>
                                                <center key={dat.id} onClick={teamBindHandler.bind(this, dat.name)}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                </center>
                                            </>
                                        }
                                    })}
                                </div>
                                <center>
                                    <div style={cboClick && ceoClick ? null : { display: "none" }}>
                                        <div className="v-line-sm"></div>
                                        <div className="card card1">
                                            {empData.map((dat) => {
                                                if (dat.id === 104) {
                                                    return <>
                                                        <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                            <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                            <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                        </center>
                                                    </>
                                                }
                                            })}
                                        </div>
                                        <div className="v-line-xsm"></div>
                                        <div className="split-line-sm" ></div>
                                        <div className="row4" style={{ position: "relative" }}>
                                            <div className="card card1">
                                                {empData.map((dat) => {
                                                    if (dat.id === 110) {
                                                        return <>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </>
                                                    }
                                                })}
                                            </div>
                                            <div className="card card1">
                                                {empData.map((dat) => {
                                                    if (dat.id === 112) {
                                                        return <>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </>
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>

                            <div className="col-md-4 row5">
                                <div className="v-line-sm" style={ceoClick ? null : { display: "none" }}></div>
                                <div className="card card1 card11" style={ceoClick ? null : { display: "none" }}>
                                    {empData.map((dat) => {
                                        if (dat.id === 103) {
                                            return <>
                                                <center key={dat.id} onClick={teamBindHandler.bind(this, dat.name)}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                    <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                    <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                </center>
                                            </>
                                        }
                                    })}
                                </div>
                                <center>
                                    <div style={cfoClick && ceoClick ? null : { display: "none" }}>
                                        <div className="v-line-xsm"></div>
                                        <div className="split-line-sm" ></div>
                                        <div className="row4" style={{ position: "relative" }}>
                                            <div className="card card1">
                                                {empData.map((dat) => {
                                                    if (dat.id === 113) {
                                                        return <>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </>
                                                    }
                                                })}
                                            </div>
                                            <div className="card card1">
                                                {empData.map((dat) => {
                                                    if (dat.id === 114) {
                                                        return <>
                                                            <center key={dat.id}> <img src={dat.image} height="80px" style={{ borderRadius: "50%", margin: 0, padding: 0 }} alt="no-data" /> <br />
                                                                <h5 style={{ margin: 0, padding: 0 }}>{dat.name}</h5>
                                                                <p style={{ margin: 0, padding: 0, fontSize: "0.5rem" }}>{dat.designation}</p>
                                                            </center>
                                                        </>
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </> : null}
        </div>
    </>
}

export default TreeDetails