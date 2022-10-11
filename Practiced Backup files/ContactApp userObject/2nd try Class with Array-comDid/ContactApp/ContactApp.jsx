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
componentDidMount=()=>{
 Axios.get ('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
    this.setState({persons:response.data})
 })
 .catch(()=>{

 })
}
render(){
    return <>
    <h1>Contact APP</h1>
    <button onClick={this.updateHandler}>click</button>
    <pre>{JSON.stringify(this.state)}</pre>
    <div className="container">
     <div className="row">
         <div className="col-md-8">
            { this.state.persons.length>0 ?<>
                {<ContactList data={this.state.persons} method1={this.getselUser} />}
            </>:null}
         </div>
         <div className="col-md-4">
            { Object.keys(this.state.selectedUser).length > 0 ?<>
                {<ContactDetails selectedData={this.state.selectedUser}/>}
            </>:null}
         
         </div>
     </div>
    </div>
    </>
}
}
export default ContactApp