import React, { useState } from "react";
import './Navbar.css'
import Dropdown from './Dropdown'
import Button from './Button'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropDown,setDropdown] =useState(false)

    let handleClick = () => setClick(!click)
    let closeMobileMenu = () => setClick(false)

    const onMouseEnter=()=>{
        if (window.innerWidth<960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave=()=>{
        if (window.innerWidth<960){
            setDropdown(false)
        }
        else{
            setDropdown(false)
        }
    }


    return <>
        <nav className="navbar">
            <Link to="/Home" className="navbar-logo">PK</Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/Home' className="nav-link" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/Services' className="nav-link" onClick={closeMobileMenu}>Services<i className="fas fa-caret-down"/>
                    </Link>
                    {dropDown && <Dropdown/>}
                </li>
   
                <li className="nav-item">
                    <Link to='/Contact-us' className="nav-link" onClick={closeMobileMenu}>Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link to='/Sign-up' className="nav-link-mobile" onClick={closeMobileMenu}>Sign-up</Link>
                </li>
            </ul>
            <Button/>
        </nav>

    </>


}

export default Navbar