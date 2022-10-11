import React from 'react'
import { Link }from "react-router-dom"

let Navbar =()=>{
return <nav  className='navbar navbar-light bg-light navbar-expand-lg'>
    <Link to='' className='navbar-brand' > App Home</Link>
    <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
           <Link to="/ProductApp" className='nav-link'>ProductApp</Link></li>&nbsp;&nbsp;
           <li className='nav-item'> <Link to="/ContactApp" className='nav-link'>ContactApp</Link>  </li>&nbsp;&nbsp;
           <li className='nav-item'>  <Link to="/UseState1" className='nav-link'>UseState</Link>  </li>&nbsp;&nbsp;
           <li className='nav-item'>  <Link to="/UseState2" className='nav-link'>UseState 2</Link>  </li>&nbsp;&nbsp;
           <li className='nav-item'>  <Link to="/UseState3" className='nav-link'>UseState 3</Link>
        </li>
    </ul>
</nav>
}
export default Navbar