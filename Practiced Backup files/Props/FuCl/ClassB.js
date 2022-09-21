import React from "react"

class ClassB extends React.Component{
    render(){
        return <div>
            <h3>hi im from class</h3>

            <hr/>
            <h1>{JSON.stringify(this.props)}</h1>
            <h2>value= {this.props.a}</h2>            
            <h2>Array= {this.props.array[2]}</h2>            
            <h2>Name= {this.props.Object.name}</h2>            

        </div>
    }
}
export default ClassB