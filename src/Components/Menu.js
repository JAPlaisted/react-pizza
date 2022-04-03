import React from "react";
import "../App.css";
import pizza1 from "../assets/pizza.png";

function Menu() {
  return (
    <div>
      <section className="menu">
        <img className="pizza" src={pizza1} alt="A pizza" />
        <ul>
          <li className="crumb">
            <br />
            <br />
            <a href="menu.html">Pizza</a>
            <br />
          </li>
          <li className="crumb">
            <br />
            <a href="menu.html">Sandwhiches</a>
            <br />
          </li>
          <li className="crumb">
            <br />
            <a href="menu.html">Salad</a>
            <br />
          </li>
          <li className="crumb">
            <br />
            <a href="menu.html">Appetizers</a>
            <br />
          </li>
          <li className="crumb">
            <br />
            <a href="menu.html">Beverages</a>
            <br />
            <br />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Menu;
