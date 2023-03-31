import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="h-8">
      <ul className="flex flex-row justify-end gap-5 m-5">
        <li className="border-4 px-2 rounded-md">
          <Link to="listfadecss">List Fade with css</Link>
        </li>
        <li className="border-4 px-2 rounded-md">
          <Link to="listfadetailwind">List Fade with tailwindcss</Link>
        </li>
        <li className="border-4 px-2 rounded-md">
          <Link to="listfadespring">List Fade with spring</Link>
        </li>
        <li className="border-4 px-2 rounded-md">
          <Link to="listfadecodepen">List Fade with codepen example</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
