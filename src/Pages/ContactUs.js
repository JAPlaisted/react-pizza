import React from "react";
import "../App.css";
import fb from "../assets/facebook.svg";
import ig from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div>
      <section className="contactUs">
        <Link to="/"> 🡠 Back</Link>
        <div className="contact2">
          <h2>Call</h2>
          <a href="/">
            <img className="icon" src={phone} alt="Phone" />
          </a>
        </div>
        <div className="contact2">
          <h2>Email</h2>
          <a href="/">
            <img className="icon" src={email} alt="Email" />
          </a>
        </div>
        <div className="contact2">
          <h2>Social Media</h2>
          <a href="/">
            <img className="icon" src={fb} alt="FaceBook" />
          </a>
          <a href="/">
            <img className="icon" src={ig} alt="Instagram" />
          </a>
          <a href="/">
            <img className="icon" src={twitter} alt="Twitter" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
