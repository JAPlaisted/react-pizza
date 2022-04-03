import "../App.css";
import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";

function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
