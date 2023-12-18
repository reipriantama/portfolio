import React from "react";
import HeaderLanding from "../../components/Header/HeaderLanding";
import Content from "../../components/Content/Content";
import Project from "../../components/Project/Project";

const LandingPage = () => {
  return (
    <div>
      <HeaderLanding />
      <Content />
      <Project />
    </div>
  );
};

export default LandingPage;
