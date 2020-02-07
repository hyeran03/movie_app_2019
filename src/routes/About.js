import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>"Don't waste it. Don't waste your life."</span>
      <span> - IronMan 1</span>
    </div>
  );
}

export default About;
