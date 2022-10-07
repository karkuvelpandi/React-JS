import React from 'react'
import { Link }from "react-router-dom"

let Navbar =()=>{
return <nav className='navbar navbar-dark bg-dark expand-lg'>
    <Link to='' className='navbar-brand' > App Home</Link>
    <ul className='navbar-nav'>
        <li className='nav-list'>
           <Link to="/ProductApp" className='nav-items'>ProductApp</Link>
           <Link to="/ContactApp" className='nav-items'>ContactApp</Link>
        </li>
    </ul>
</nav>
}
export default Navbar