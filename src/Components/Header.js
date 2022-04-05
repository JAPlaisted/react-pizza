import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <div>
      <section id="header">
        <nav>
          <ol>
            <li>
              <Link to="/FullMenu">Menu</Link>
            </li>
            <li>
              <a
                href="https://www.doordash.com/store/pacifica-pizza-fresno-517927/"
                target="_blank"
                rel="noreferrer"
              >
                Order
              </a>
            </li>

            <li>
              <Link to="/ContactUs">Contact</Link>
            </li>
          </ol>
        </nav>
        <figure>
          <img
            className="logo"
            src="http://images.squarespace-cdn.com/content/v1/5325e79ae4b06acf70718257/1416264642417-SLL5539PUWV1FJYV6DPZ/Pacifica+Pizza+TD+Logo+White.png?format=750w"
            alt="Pacifica Pizza"
          />
          <figcaption>The Best Pizza Can Get</figcaption>
        </figure>
      </section>
    </div>
  );
}

export default Header;
