import React from "react"

class Counter extends React.Component {
 /*    counter = 1 */
 state={
    counter:1,
    msg :"e"
 }
    updateCounter= ()=> {
       this.setState({counter:this.state.counter+1})
    };
    stopHandler=(event)=>{
    
     /*    this.setState({counter:0}) */
        this.setState({counter:0,msg:"a"})

         
    };
    decrementHandler=()=>{
     this.setState({counter:this.state.counter-1})
     if( this.state.counter<=0){
     
        return this.stopHandler()
     }
    };
    render() {
        console.log('first ');
        return <React.Fragment>
            <h1>Counter value={this.state.counter}</h1>
            <span>{this.msg}</span> 
            <br/><br/>
            <button onClick={this.updateCounter}>Increment counter</button>
            <button onClick={this.decrementHandler}>Decrement Counter</button>
        </React.Fragment>
    }
}
export default Counter

//To update class property classcomponent Own data convert as a STATE object property

//How to Update state ?
//Using setState Method only that is from React.Component Only