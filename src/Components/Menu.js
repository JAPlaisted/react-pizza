import React from "react";
import "../App.css";
import pizza1 from "../assets/pizza.png";
import { HashLink } from "react-router-hash-link";

function Menu() {
  return (
    <div>
      <section className="menu">
        <img className="pizza" src={pizza1} alt="A pizza" />
        <ul>
          <li className="crumb">
            <br />
            <br />
            <HashLink to="FullMenu#hiddenMenu1"> Pizza</HashLink>
            <br />
          </li>
          <li className="crumb">
            <br />
            <HashLink to="FullMenu#hiddenMenu2"> Sandwhiches</HashLink>
            <br />
          </li>
          <li className="crumb">
            <br />
            <HashLink to="FullMenu#hiddenMenu3"> Salad</HashLink>
            <br />
          </li>
          <li className="crumb">
            <br />
            <HashLink to="FullMenu#hiddenMenu4"> Appetizers</HashLink>
            <br />
          </li>
          <li className="crumb">
            <br />
            <HashLink to="FullMenu#hiddenMenu5"> Beverages</HashLink>
            <br />
            <br />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Menu;
