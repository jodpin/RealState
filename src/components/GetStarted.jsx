import React from "react";
import "../styles/GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">Subscribe and find super attractive price qoutes from
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:zainkeepscode@gmail.com">GetStarted</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
