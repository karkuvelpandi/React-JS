import React, { Component } from 'react'
import img1 from "../Images/img1.jpg"
import { Link } from "react-router-dom"
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link href="#" className="navbar-brand"><img src={img1} height="50px" /></Link>
                <div className="ml-auto">
                    <ul className="navbar nav">
                        <li className="nav-item"><Link to="/Home">Home</Link></li> &nbsp;&nbsp;
                        <li className="nav-item"><Link to="/User">User</Link></li>&nbsp;&nbsp;
                        <li className="nav-item"><Link to="/Service">Service</Link></li>
                    </ul>
                </div>

            </nav>
        )
    }
}

export default Navbar