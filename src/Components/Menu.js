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
            <a href="https://magnificent-torte-aec714.netlify.app/FullMenu/#hiddenMenu1">
              Pizza
            </a>
            <br />
          </li>
          <li className="crumb">
            <br />
            <a href="https://magnificent-torte-aec714.netlify.app/FullMenu/#hiddenMenu2">
              Sandwhiches
            </a>
            <br />
          </li>
          <li className="crumb">
            <br />
            <a href="https://magnificent-torte-aec714.netlify.app/FullMenu/#hiddenMenu3">
              Salad
            </a>
            <br />
          </li>
          <li className="crumb">
            <br />
            <a href="https://magnificent-torte-aec714.netlify.app/FullMenu/#hiddenMenu4">
              Appetizers
            </a>
            <br />
          </li>
          <li className="crumb">
            <br />
            <a href="https://magnificent-torte-aec714.netlify.app/FullMenu/#hiddenMenu5">
              Beverages
            </a>
            <br />
            <br />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Menu;
