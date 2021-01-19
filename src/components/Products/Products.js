import React from "react";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      <div className="product_card">
        <h3 className="product_heading">Python</h3>
        <div className="features">
          <p className="one">Full Python tutorial</p>
          <p className="two">
            Python is an object-oriented, interpretative, scientific and
            interactive high-level language learning and catchy language.
            <br/><br/><br/>

          </p>
          <p className="three">By Peter John</p>
        </div>
        <div>
          <button className="product_button" id="btn1">15$ Buy</button>
        </div>
      </div>

      <div className="product_card">
        <h3 className="product_heading">React</h3>
        <div className="features">
          <p className="one">Full React tutorial</p>
          <p className="two">
            Open source web application framework for creating React user
            interface.React,which is being developed by a developer group
            under the leadership of Facebook.
          </p>
          <p className="three">By Sarah Parker</p>
        </div>
        <div>
          <button className="product_button" id="btn2">25$ Buy</button>
        </div>
      </div>

      <div className="product_card">
        <h3 className="product_heading">Php</h3>
        <div className="features">
          <p className="one">Full Php tutorial</p>
          <p className="two">
            Hypertext Preprocessor is a server-side, widely used, general
            purpose script and programming language that can be embedded in
            HTML.<br/><br/><br/>
          </p>
          <p className="three">By Helena Carter</p>
        </div>
        <div>
          <button className="product_button" id="btn3">22$ Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
