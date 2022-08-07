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
          <h2 className="bottom-margin">Welcome<br /> to Mega Lo Mart</h2> 
          <blockquote>
            At Mega lo Mart, you're shopping for the rest of your life.
          </blockquote>
        </div>
      </div>

      <div className="hidden">
        <div>
          <h6>featured sale</h6>
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
