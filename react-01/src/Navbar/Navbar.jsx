import React from "react";
import {Link}from "react-router-dom"

class Navbar extends React.Component{
    render(){
        return<>
        <nav className="navbar navbar-dark bg-dark navbar expand-lg">
            <Link to="#" className="navbar-brand">Hello</Link>
            <div className="ml-auto">
                <ul className="">
                    <li>
                        <Link to="/UserApp">UserApp</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    }
}
export default Navbar