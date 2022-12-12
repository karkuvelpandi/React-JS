import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './TreeDetails.css'
const TreeDetails = (props) => {
    let [data, setData] = useState([])
    let [singleData, setSingleData] = useState([])

    let [ceoClick, setCeoClick] = useState(false)
    let [ctoClick, setCtoClick] = useState(false)
    let [cboClick, setCboClick] = useState(false)
    let [cfoClick, setCfoClick] = useState(false)
    

    let teamBindHandler = (name) => {
       if(name=='Jas John'){
        setCeoClick(!ceoClick)
       }
       if(ceoClick){
           if(name=="Leo Six"){
            setCtoClick(!ctoClick)
           }
           else if(name=="Diala Sho"){
            setCboClick(!cboClick)
           }
           else if(name=="Tab Han"){
            setCfoClick(!cfoClick)
           }
       }
       else if(!ceoClick){
        setCtoClick(false)
        setCboClick(false)
        setCfoClick(false)
       } 
    }

    useEffect(() => {
        setData(props.wholeData)
        setSingleData(props.singleData)
    }, [props])
    return <>
        <div className="container-fluid mt-5" >
            <div className="row" style={{display:"flux",justifyContent:"center",}}>
                <div className="col-md-4">
                    {
                        Object.keys(singleData).length > 0 ? <>
                            <div className="card detailCard">
                                <div id="detailsC-head">
                                    <center><img src={singleData.image} className="detailImage" alt="no-pic" /></center>
                                </div>
                                <div >
                                    <ul className="list-group" style={{minWidth:"300px"}}>
                                        <li className="list-group-item"><b>Name : </b>{singleData.name}</li>
                                        <li className="list-group-item"><b>Id : </b>{singleData.id}</li>
                                        <li className="list-group-item"><b>Designation : </b>{singleData.designation}</li>
                                        {singleData.id === 101 ? null : <li className="list-group-item"><b>Team : </b>{singleData.team}</li>}
                               {singleData.id === 101 ?  <button className='btn btn-success' onClick={teamBindHandler.bind(this, singleData.name)}>Click to view team</button>:null}        
                                    </ul>
                                </div>
                            </div>
                        </> : <div style={{ height: "340px" }}><h3 style={{ marginTop: "100px", marginLeft: "50px", padding: 0, background: "lime", height: "40px" }}>&#128072;Select Employee...</h3></div>
                    }

                </div>

            </div>
            {data.length > 0 ? <>
                <div className="row mt-5" >
                    
                </div>

            </> : null}

        </div>
    </>
}

export default TreeDetails