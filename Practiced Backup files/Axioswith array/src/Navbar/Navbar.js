import React from "react";
import {Link} from "react-router-dom"
class Navbar extends React.Component {
    render() {
        return <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a href="#" className="navbar-brand"></a>
                <div className="ml-auto">
                    <ul className="navbar nav">
                        <li className="nav-list"><Link to="Home">Home</Link></li>
                        <li className="nav-list"><Link to="Users">Users</Link></li>
                    </ul>
                </div>

            </nav>
        </>
    }
}
export default Navbar