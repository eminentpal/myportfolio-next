import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Homepage = () => {
  return (
    <>
      <section className="contact" id="home">
        <Header />
        <div className="text-container">
          <p> Hello,</p>
          <p> I'm Ezie .I,</p>
          <p>
          
            I am a Software Developer, <br /> Blogger & IT Consultant.
          </p>

          <a href="https://wa.me/2348140035918">
        
            <button className="hire-btn">Hire Me</button>
          </a>

          <button className="down-cv"> Download CV</button>
        </div>
        <img src="/images/me.png" className="model" alt="model" />
      </section>
      <Body />
      <Footer />
    </>
  );
};

export default Homepage;
