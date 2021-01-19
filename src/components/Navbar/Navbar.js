import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [bars, setBars] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
    setBars(!bars);
  };
  return (
    <>
      <nav id="navbar" onClick={changeToggle}>
        <div className="logo">
          <h1>EduPro</h1>
        </div>
        {bars ? <FaBars id="bars" /> : <AiOutlineClose id="close" />}

        <div className={toggle ? "close" : "nav_menu"}>
          <ul>
            <li className="nav_home">Home</li>
            <li className="nav_about">About</li>
            <li className="nav_courses">Courses</li>
            <li className="nav_contact">Contact</li>
            <div>
              <button className="nav_button">Learn</button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
