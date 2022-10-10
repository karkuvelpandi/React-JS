import React from 'react'

function ProductDetails({userData}) {
  return <>
    <div>ProductDetails</div>
    <pre>{JSON.stringify({userData})}</pre>
    <div className="card">
     {Object.keys(userData).length?<>
     
     return <div className="card-header">
       {/* <img src={userData.image} alt="" /> */}
      </div>
      <div className="card-body">
       <h2>Name :{userData.firstName}</h2>
       <h2>Eamil :{userData.email}</h2>
       <h2>DOB :{userData.birthDate}</h2> 
      </div>
     
     </>:null}
    </div>
  </>
}

export default ProductDetails