import React from "react";
import heroImg from "../../assets/MegaLo.webp";

const Home = () => {
  return (
    <div className="container page">

      <div className="flex-row home">
        <div className="container hero-image">
          <img src={heroImg} alt="Mego Lo Mart, Arlen Branch" />
        </div>
        <div className="container">
          <h3 className="bottom-margin">Welcome to Mega-Lo-Mart</h3>
          <blockquote>
            At Mega Lo Mart, you're shopping for the rest of your life.
          </blockquote>
        </div>
      </div>

      <div className="hidden">
        <div>
          <h6>Featured Sale</h6>
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
