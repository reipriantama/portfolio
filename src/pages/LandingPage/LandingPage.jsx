import React from "react";
import HeaderLanding from "../../components/Header/HeaderLanding";
import Content from "../../components/Content/Content";
import Project from "../../components/Project/Project";
import Contact from "../../components/Contact/Contact";

const LandingPage = () => {
  return (
    <div>
      <HeaderLanding />
      <Content />
      <Project />
      <Contact />
    </div>
  );
};

export default LandingPage;
