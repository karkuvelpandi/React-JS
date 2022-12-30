import React , {Component} from 'react'

class Book extends Component {
    constructor(props){
        super(props);
        this.state={
            message1:'This is State Message'  //state message
        };
        this.message2= "This is a Variable Message";   //variable message
    }
    changeMessage1 = () => {
        this.setState({message1: "Your State Message is changed"});
    }
    changeMessage2 = () => {
        this.message2= "Your variable message is changed";
    }
    
    render() {
        console.log(this.state.message1)
        console.log(this.message2)
        return (
        <div>
        <h2>{this.state.message1}</h2>
        <h2>{this.message2}</h2>

        {/* button for state message change */}

        <button
            type="button"
            onClick={this.changeMessage1}
        >Change State Message</button>

         {/* button for variable message change */}
        
        <button
            type="button"
            onClick={this.changeMessage2}
        >Change Variable Message</button> 
        </div>
        )
    }
}



export default Book