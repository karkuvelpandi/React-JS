import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
const Navbar = () => {
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const dropdownList1 = [
    <Link to="iframe1">Component-A</Link>,
    <Link to="iframe2">Component-B</Link>,
  ];
  return (
    <>
      <nav className="bg-slate-500 h-[10vh] flex justify-start relative">
        <ul className="w-fit h-full flex justify-center items-center self-end gap-4 mx-4 text-white">
          <li>
            <span
              onClick={() =>
                dropdownClicked
                  ? setDropdownClicked(false)
                  : setDropdownClicked(true)
              }
              className="cursor-pointer relative"
            >
              DropDown
            </span>
          </li>
          {dropdownClicked && (
            <div className="h-auto w-24 bg-orange-400 fixed ">
              <Dropdown dropdownList={dropdownList1} />
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
