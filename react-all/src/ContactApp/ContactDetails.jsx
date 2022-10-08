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
          <ul className="list-group">
            
            <li className="list-group-item"><h3>Email   : </h3>{this.props.selectedData.email}</li>
            <li className="list-group-item"><h3>Company : </h3>{this.props.selectedData.company.name}</li>
            <li className="list-group-item"><h3>Website :</h3> {this.props.selectedData.website}</li>
          </ul>
          </div>
        </div>
        </div>
  
  }
}

export default ContactDetails