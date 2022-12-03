// import React from 'react'
import { Link } from 'react-router-dom'
let Navbar = () => {
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='' className='navbar-brand'>Hooks</Link>
        <ul className='navbar-nav ml-auto'>
            <li className='nav-list'>  <Link to='UseState' className="nav-item">UseState</Link> </li>
            <li className='nav-list'> <Link to='Counter' className="nav-item">Counter</Link> </li>
            <li className='nav-list'>  <Link to='Clock' className="nav-item">Clock</Link> </li>
            <li className='nav-list'>  <Link to='ContactApp' className="nav-item">ContactApp</Link></li>
            <li className='nav-list'>  <Link to='UserApp' className="nav-item">UserApp</Link></li>
            <li className='nav-list'>  <Link to='ProductApp' className="nav-item">ProductApp</Link></li>
        </ul>
    </nav>
}
export default Navbar