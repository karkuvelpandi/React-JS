import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="iframe1">Component-A</Link>
          </li>
          <li>
            <Link to="iframe2">Component-B</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
