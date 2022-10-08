import React, { useState } from 'react'
import './Navbar.css'
import Button from './Button'
import Dropdown from './Dropdown'
import { Link}  from 'react-router-dom'

let Navbar = () => {

    const [click, setClick] = useState(false)
    const[dropDown,setDropdown]=useState(false)

    let handleClick = () => {   setClick(!click)  };
    let closeMobileMenu=()=>{   setClick (false)  };



    return <>
        <nav classname="navbar">
            <Link to='/' className='navbar-logo'>P.K Pandi 007</Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click?'nav-menu active':'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className='nav-link' onClick={closeMobileMenu}>Home</Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link' onClick={closeMobileMenu}>Services<i className='fas fa-caret-down'/> </Link>
                    {dropDown && <Dropdown/>}
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link' onClick={closeMobileMenu}>Contact Us</Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to="/" className='nav-link-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                    
                </li>
            </ul>
            <Button/>
        </nav>

    </>
};


export default Navbar