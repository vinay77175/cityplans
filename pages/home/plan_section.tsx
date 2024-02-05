import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import planImage from "../../public/Images/plan_image_1.png";
import plan1 from "../../public/Images/Plan_1.png";
import plan2 from "../../public/Images/Plan_2.png";
import plan3 from "../../public/Images/plan_3.png";
import plan4 from "../../public/Images/Plan_4.png";
const Plan_section = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={5}>
          <Box position={"absolute"}>
            <img
              width={"95%"}
              style={{ borderTop: "20px solid white" }}
              src={planImage.src}
              alt=""
            />
          </Box>
          <Box position={"relative"}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Jacques Francois",
                color: "black",
                marginTop: { xs: "15vh", lg: "13vh" },
                textAlign: { xs: "center", lg: "center " },
              }}
            >
              Plans
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Times New ROman",
                color: "black",
                marginTop: { xs: "15vh", lg: "10vh" },
                textAlign: { xs: "center", lg: "center " },
                paddingX: { lg: "6vh" },
              }}
            >
              Cras at magna vitae erat posuere lacinia euid cursus mi
              condimentum Sed hendrerit arcu vehicula dolor sit amet.
            </Typography>
            <Typography
              sx={{
                marginTop: { xs: "8vh", lg: "7vh " },
                fontFamily: "Times New Roman",
                color: "black",
                paddingX: { xs: "20vh", lg: "5vh" },
                textAlign: { xs: "center", lg: "center" },
                fontSize: "1.4rem",
              }}
            >
              Integer pellentesque erat faucibus mollis eleifend.Donec tempor ex
              ut magna convallis, id cursus mi condimentum.Sed hendrerit arcu
              vehicula Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus, doloremque!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img src={plan1.src} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Plan_section;
