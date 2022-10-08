import React from 'react'
import { Link }from "react-router-dom"

let Navbar =()=>{
return <nav className='navbar navbar-dark bg-dark expand-lg'>
    <Link to='' className='navbar-brand' > App Home</Link>
    <ul className='navbar-nav'>
        <li className='nav-list'>
           <Link to="/ProductApp" className='nav-items'>ProductApp</Link>&nbsp;&nbsp;
           <Link to="/ContactApp" className='nav-items'>ContactApp</Link>&nbsp;&nbsp;
           <Link to="/UseState1" className='nav-items'>UseState</Link>&nbsp;&nbsp;
           <Link to="/UseState2" className='nav-items'>UseState 2</Link>&nbsp;&nbsp;
           <Link to="/UseState3" className='nav-items'>UseState 3</Link>
        </li>
    </ul>
</nav>
}
export default Navbar