import React from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import Axios from 'axios'

class ContactApp extends React.Component{
constructor(props){
    super(props)
    this.state={
        persons:[],
        selectedUser:{}
    }
}
getselUser=(user)=>{
   console.log(user.id)
   this.setState({selectedUser:user})
}
updateHandler=()=>{
 Axios.get ('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    this.setState({persons:response.data})
 })
 .catch(()=>{

 })
}
render(){
    return <>
    <h1>Product APP</h1>
    <button onClick={this.updateHandler}>click</button>
    <pre>{JSON.stringify(this.state)}</pre>
    <div className="container">
     <div className="row">
         <div className="col-md-8">
              {<ContactList data={this.state.persons} method1={this.getselUser} />}
         </div>
         <div className="col-md-4">
         {<ContactDetails selectedData={this.state.selectedUser}/>}
         </div>
     </div>
    </div>
    </>
}
}
export default ContactApp