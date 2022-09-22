import React from "react"
class Counter extends React.Component {  /*    counter = 1 */
   state = {
      counter: 1,
      msg: "Select"
   }
   updateCounter = () => {
      this.setState({ counter: this.state.counter + 1 })
      if (this.state.counter >= 1) {
         this.setState({ msg: "Select" })
      }
   };
   stopHandler = () => {
      this.setState({ counter: 0, msg: "Select Positive values" })    /*    this.setState({counter:0}) */
   };
   decrementHandler = () => {
      this.setState({ counter: this.state.counter - 1 })
      if (this.state.counter <= 0) {

         return this.stopHandler()
      }
      else if (this.state.counter >= 1) {
         this.setState({ msg: "Select" })
      }
   };
   render() {
      console.log('first ');
      return <React.Fragment>
         <h1>Counter value={this.state.counter}</h1>
         <span>{this.state.msg}</span>
         <br /><br />
         <button onClick={this.updateCounter}>Increment counter</button>
         <button onClick={this.decrementHandler}>Decrement Counter</button>
      </React.Fragment>
   }
}
export default Counter

//To update class property classcomponent Own data convert as a STATE object property

//How to Update state ?
//Using setState Method only that is from React.Component Only