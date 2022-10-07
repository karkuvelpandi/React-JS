import React from 'react'

class ContactDetails extends React.Component{
  render(){
    return  <div>
        <h2>ContactDetails</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <div className="card">
          <div className="card-header">
           <h1>{this.props.selectedData.name}</h1>
          </div>
          <div className="card-body">
          <ul>
            <li>Email   :{this.props.selectedData.email}</li>
            <li>City    :{this.props.selectedData.address.city}</li>
            <li>Company :{this.props.selectedData.company.name}</li>
            <li>Website :{this.props.selectedData.website}</li>
          </ul>
          </div>
        </div>
        </div>
  
  }
}

export default ContactDetails