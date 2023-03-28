import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return <nav className="h-8">
    <ul>
        <li><Link to="listfadecss">List Fade with css</Link></li>
        <li><Link to="listfadespring">List Fade with spring</Link></li>
    </ul>
  </nav>
};

export default Navbar;
