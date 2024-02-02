import { Box } from "@mui/material";
import React from "react";
import backImg1 from "../../public/Images/about_back.png";
const About_section = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#B12930",
        backgroundImage: `url(${backImg1.src})`,
        backgroundSize:"cover"
      }}
    ></Box>
  );
};

export default About_section;
