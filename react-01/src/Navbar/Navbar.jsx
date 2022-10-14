import React from 'react'
import { Link }from "react-router-dom"

let Navbar =()=>{
return <nav  className='navbar navbar-light bg-light navbar-expand-lg'>
    <Link to='' className='navbar-brand' > App Home</Link>
    <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
           <Link to="/ProductApp" className='nav-link'>ProductApp</Link></li>&nbsp;&nbsp;
           
    </ul>
</nav>
}
export default Navbar