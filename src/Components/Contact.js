import React from "react";
import "../App.css";
import fb from "../assets/facebook.svg";
import ig from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import maps from "../assets/maps.JPG";

function Contact() {
  return (
    <div>
      <section class="contact">
        <div class="icons container">
          <a href="https://www.facebook.com/Pacifica-Pizza-151158698289170/">
            <img class="icon" src={fb} alt="FaceBook" />
          </a>
          <a href="https://www.instagram.com/pacifica_pizza/">
            <img class="icon" src={ig} alt="Instagram" />
          </a>
          <a href="https://twitter.com/pacpizzatower">
            <img class="icon" src={twitter} alt="Twitter" />
          </a>
          <a href="mailto: pacificapizzatower@gmail.com">
            <img class="icon" src={email} alt="Email" />
          </a>
          <a href="tel:+15592683494">
            <img class="icon" src={phone} alt="Phone" />
          </a>
        </div>
        <div class="container">
          <a href="https://www.google.com/maps/dir//pacifica+pizza/@36.7571916,-119.8231051,14.04z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8094674eb607a917:0x6aa9c2738c5af371!2m2!1d-119.8060418!2d36.7573623">
            <figure class="map-figure">
              <p>COME JOIN US!</p>
              <img class="map" src={maps} alt="Google Maps Location" />
            </figure>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
