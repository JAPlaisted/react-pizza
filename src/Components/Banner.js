import React from "react";
import "../App.css";
import $ from "jquery";

function Banner() {
  $(document).on("scrollstart", function () {
    $("h2").css("left", Math.max(147.5 - 0.2 * window.scrollY) + "vw");
  });
  $(document).on("scrollstart", function () {
    $("h3").css("right", Math.max(147.5 - 0.2 * window.scrollY) + "vw");
  });
  return (
    <div>
      <section className="banner">
        <div className="scrolling-text">
          <h3>
            It's Pacifica Time! It's Pacifica Time! It's Pacifica Time! It's
            Pacifica Time! It's Pacifica Time!
          </h3>
          <br />
          <h2>
            BEST PIZZA IN FRESNO BEST PIZZA IN FRESNO BEST PIZZA IN FRESNO
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Banner;
