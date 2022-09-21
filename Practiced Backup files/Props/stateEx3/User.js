import React from "react"
import Employee from "./Employee"
class User extends React.Component {
     userId=101;
     userName="Rahul Gandi"
     location=["chennai","madurai","Banglore"]
     moreDetails={age:23, salary:10000};
    render() {
        return <div>
            <h2>Iam user component</h2>
            <hr/>
            
            <Employee one={this.location} two={this.moreDetails} />

        </div>
    }
}
export default User