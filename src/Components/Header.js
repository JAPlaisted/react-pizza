import React from "react";
import "../App.css";

function Header() {
  return (
    <div>
      <section className="header">
        <nav>
          <ol>
            <li>
              <a href="menu.html">Menu</a>
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
              <a href="contact.html">Contact</a>
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
