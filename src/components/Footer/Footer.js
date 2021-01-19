import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span>EduPro</span>
          </h3>
          <p className="footer-links">
            <a href="/">Home</a>
            <a href="/">Pricing</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </p>
          <p className="footer-company-name">EduPro © 2015</p>
          <div className="footer-icons">
            <FaFacebook id="fac" />
            <FaTwitter id="twt" />
            <FaInstagram id="ins" />
          </div>
        </div>
        <div className="footer-right">
          <p>Contact Us</p>
          <form action="/" method="post">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </footer>
    </>
  );
}

export default Footer;
