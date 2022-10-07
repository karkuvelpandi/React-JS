import React from 'react'
import { Link } from 'react-router-dom'
let Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark expand-lg">
        <Link to='' className='navbar-brand'>Hooks</Link>
        <ul className='navbar-nav ml-auto'>
            <li className='nav-list'>  <Link to='UseState' className="nav-items">UseState</Link> </li>
            <li className='nav-list'> <Link to='Counter' className="nav-items">Counter</Link> </li>
            <li className='nav-list'>  <Link to='Clock' className="nav-items">Clock</Link>
            </li>
        </ul>
    </nav>
}
export default Navbar