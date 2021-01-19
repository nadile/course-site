import React from "react";
import "./Header.css";
import img from "../../images/header.png"
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <h1 className="heading">If You want to contribute to the future join us.</h1>
        <p className="content">
          Discover a wide variety of new courses. Get professional training and
          lifetime access. Get early access immediately
        </p>
        <div>
        <button className="header_button">Learn</button>
      </div>
      </div>
      
      <div className="header_right">
        <img src={img} alt="head_img"/>
      </div>
    </div>
  );
}

export default Header;
