import React from "react";
import ClassCompB from "./ClassCompB";

class ClassCompA extends React.Component{

    emp_Id=101;
    emp_PreferedLoc=["chennai","Banglore"]
    emp_Details ={name:"rehul",
                   salary:1200000}
    render(){
        return <div>
            <h1>Im class componenet A</h1>
            <h2>Employee Id={this.emp_Id}</h2>
            <h2>Employee name= {this.emp_Details.name}</h2>
            <hr/>
            <ClassCompB 
            id={this.emp_Id}
            details={this.emp_Details}
            location={this.emp_PreferedLoc}
            />
        </div>
    }
}

export default ClassCompA