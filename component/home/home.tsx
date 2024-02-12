import React from "react";
import Home_section from "./home_section";
import About_section from "./about_section";
import Plan_section from "./plan_section";
import Category_section from "./category_section";
import Contact_section from "./contact_section";

const LandingPage = () => {
  return (
    <div>
      <Home_section />
      <About_section />
      <Plan_section />
      <Category_section />
      <Contact_section />
    </div>
  );
};

export default LandingPage;
