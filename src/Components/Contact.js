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
          <a href="#">
            <img class="icon" src={fb} alt="FaceBook Icon" />
          </a>
          <a href="#">
            <img class="icon" src={ig} alt="Instagram Icon" />
          </a>
          <a href="#">
            <img class="icon" src={twitter} alt="Twitter Icon" />
          </a>
          <a href="#">
            <img class="icon" src={email} alt="Email Icon" />
          </a>
          <a href="#">
            <img class="icon" src={phone} alt="Phone Icon" />
          </a>
        </div>
        <div class="container">
          <a href="https://www.google.com/maps/dir//pacifica+pizza/@36.7571916,-119.8231051,14.04z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8094674eb607a917:0x6aa9c2738c5af371!2m2!1d-119.8060418!2d36.7573623">
            <figure class="map-figure">
              <p>COME JOIN US!</p>
              <img class="map" src={maps} alt="Google Maps Location Image" />
            </figure>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
