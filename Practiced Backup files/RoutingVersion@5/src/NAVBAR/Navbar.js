import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Navbar extends Component {
  render() {
    return <div>
      
      <nav className='navbar navbar-dark bg-dark navbar expand-lg'>
        <Link to='' className="navbar-brand"> React Router Concept</Link>
        <ul>
          <li><Link className='nav-link' to='Home' >Home</Link></li>
          <li><Link className='nav-link' to='Services' >Services</Link></li>

        </ul>
      </nav>
    </div>

  }
}

export default Navbar