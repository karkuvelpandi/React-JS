import React from 'react'

const RegForm = () => {
  return <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="row" style={{background:"red"}}>
               <h1 style={{background:"yellow"}}>Regestration Form</h1>
                </div>
                <div className="row" style={{background:"green"}}>
                 <div className="col-md-6">
                   <div className="form-group">
                    <input type="text" className="form-control" placeholder='Username'/>
                   </div>
                   <div className="form-group">
                    <input type="text" className="form-control" placeholder='Username'/>
                   </div>
                   <div className="form-group">
                    <input type="text" className="form-control" placeholder='Username'/>
                   </div>
                   <div className="form-group">
                    <input type="text" className="form-control" placeholder='Username'/>
                   </div>
                 </div>
                 <div className="col-md-6">
                 <div className="form-group">
                    <input type="text" className="form-control" placeholder='Username'/>
                   </div>
                   <div className="form-group">
                    <input type="text" className="form-control" placeholder='Username'/>
                   </div>
                   <div className="form-group">
                    <input type="text" className="form-control" placeholder='Username'/>
                   </div>
                   <div className="form-group">
                    <input type="text" className="form-control" placeholder='Username'/>
                   </div>
                 </div>
                 
                </div>
                <div className="row"style={{background:"blue"}}>
                 <input type="submit" className='btn btn-danger' />
                </div>
            </div>
        </div>
    </div>
  </>
}

export default RegForm