import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import planImage from "../../public/Images/plan_image_1.png";
import plan1 from "../../public/Images/Plan_1.png";
import plan2 from "../../public/Images/Plan_2.png";
import plan3 from "../../public/Images/plan_3.png";
import plan4 from "../../public/Images/Plan_4.png";
const Plan_section = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container sx={{ marginBottom: "20vh" }}>
          <Grid
            item
            xs={12}
            lg={5}
            sx={{
              backgroundImage: `url(${planImage.src})`,
              backgroundRepeat: "round",
              backgroundSize: "cover",
              minHeight: "100%",
              width: "100%",
              Top: "0vh",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Jacques Francois",
                  color: "black",
                  marginTop: { xs: "4vh", lg: "7vh", xl: "10vh" },
                  textAlign: { xs: "center", lg: "center " },
                }}
              >
                Plans
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Times New Roman",
                  color: "black",
                  marginTop: { xs: "4vh", lg: "5vh", xl: "7vh" },
                  textAlign: { xs: "left", lg: "left " },
                  paddingX: { xs: "5vh", lg: "4vh", xl: "5vh" },
                  marginRight: { xs: "3vh", lg: "0vh" },
                  fontSize: { xs: "28px", sm: "40px", md: "32px", lg: "40px" },
                }}
              >
                Cras at magna vitae erat posuere lacinia euid cursus mi
                condimentum Sed hendrerit arcu vehicula dolor sit amet.
              </Typography>
              <Typography
                sx={{
                  marginTop: { xs: "5vh", md: "6vh", lg: "5vh ", xl: "7vh" },
                  fontFamily: "Times New Roman",
                  color: "black",
                  paddingX: { xs: "5vh", lg: "5vh" },
                  marginRight: { xs: "2vh", lg: "1vh", xl: "5vh" },
                  textAlign: { xs: "left", lg: "left" },
                  fontSize: { sm: "1.4rem", lg: "1.7rem", xl: "2rem" },
                  letterSpacing: { xl: "1px" },
                }}
              >
                Integer pellentesque erat faucibus mollis eleifend.Donec tempor
                ex ut magna convallis, id cursus mi condimentum.Sed hendrerit
                arcu vehicula Lorem ipsum dolor sit amet consectetur,
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={7}
            sx={{ marginTop: { xs: "10vh", sm: "20vh", lg: "5vh" } }}
          >
            <Box
              sx={{ display: "flex" }}
              alignItems={"baseline"}
              justifyContent={"center"}
            >
              <Box
                sx={{ width: "40%" }}
                component={"img"}
                src={plan1.src}
              ></Box>
              <Box
                sx={{ width: "40%" }}
                component={"img"}
                src={plan3.src}
              ></Box>
            </Box>
            <Box
              sx={{ display: "flex" }}
              alignItems={"start"}
              justifyContent={"center"}
            >
              <Box
                sx={{ width: "40%" }}
                component={"img"}
                src={plan4.src}
              ></Box>
              <Box
                sx={{ width: "40%" }}
                component={"img"}
                src={plan2.src}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Plan_section;
