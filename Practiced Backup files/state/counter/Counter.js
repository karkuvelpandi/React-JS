import React from "react"

class Counter extends React.Component {
 /*    counter = 1 */
 state={
    counter:1
 }
    updateCounter= ()=> {
       this.setState({counter:this.state.counter+1})
    };
    decrementHandler=(event)=>{
     this.setState({counter:this.state.counter-1})
   /*   if(this.state.counter===0){
          event.addeventListe
     } */
    };
    render() {
        console.log('first ');
        return <React.Fragment>
            <h1>Counter value={this.state.counter}</h1>
            <button onClick={this.updateCounter}>Increment counter</button>
            <button onClick={this.decrementHandler}>Decrement Counter</button>
        </React.Fragment>
    }
}
export default Counter

//To update class property classcomponent Own data convert as a STATE object property

//How to Update state ?
//Using setState Method only that is from React.Component Only