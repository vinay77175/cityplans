import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React from "react";
import backImg1 from "../../public/Images/about_back.png";
import backImg2 from "../../public/Images/about_image_1.png";
import backImg3 from "../../public/Images/about_image_2.png";
import backImg4 from "../../public/Images/about_image_4.png";
const About_section = () => {
  return (
    <Box
      sx={{
        // minHeight: "100vh",
        // width: "100%",
        bgcolor: "#B12930",
        backgroundImage: `url(${backImg1.src})`,
        marginBottom: "20px",
        backgroundSize: "cover",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Grid container sx={{ display: "flex" }}>
        <Box width="100%" display="flex" justifyContent="center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Jacques Francois",
              color: "white",
              marginTop: { xs: "10vh", lg: "5vh" },
              display: { xs: "block", lg: "none" },
              marginBottom: { xs: "7vh" },
            }}
          >
            About Us
          </Typography>
        </Box>

        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
            padding: "30px 0px 0px 40px",
            position: "relative",
          }}
          sm={12}
          md={12}
          lg={7}
        >
          <img
            style={{
              width: "20%",
              position: "absolute",
              top: "6vw",
              right: "12vw",
            }}
            src={backImg4.src}
            alt=""
          />
          <img
            style={{ width: "60%", zIndex: "3", border: "20px white solid" }}
            src={backImg2.src}
            alt="image_1"
          />
          <img
            style={{
              width: "40%",
              marginLeft: "-7vw",
              zIndex: "5",
              border: "20px white solid",
            }}
            src={backImg3.src}
            alt="image_1"
          />
          <img
            style={{
              width: "20%",
              position: "absolute",
              bottom: "4vw",
              right: "12vw",
              transform: "scaleY(-1)",
            }}
            src={backImg4.src}
            alt=""
          />
        </Grid>
        <Grid item sm={12} md={12} lg={5}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Jacques Francois",
              color: "white",
              marginTop: { xs: "15vh", lg: "5vh" },
              textAlign: { xs: "center", lg: "left" },
              display: { xs: "none", lg: "block" },
            }}
          >
            About Us
          </Typography>

          <Typography
            variant="h3"
            sx={{
              marginTop: { xs: "15vh", lg: "15vh" },
              textAlign: { xs: "center", lg: "left" },
              fontFamily: "Jacques Francois",
              color: "white",
              px: { xs: "3vh", lg: "0vh" },
            }}
          >
            Sit amet, consectetur adipiscing elit.
          </Typography>

          <Typography
            sx={{
              marginTop: { xs: "8vh", lg: "5vh" },
              fontFamily: "Times New Roman",
              color: "white",
              paddingX: { xs: "3vh", lg: "0vh" },
              textAlign: { xs: "center", lg: "left" },
              fontSize: { xs: "1.2rem", sm: "1.35rem", lg: "1.4rem" },
              letterSpacing: "2px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur consequat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur consequat.
          </Typography>

          <Box
            sx={{
              display: "flex",
              paddingTop: "5vh",
              paddingX: { xs: "3vh", lg: "0vh" },
            }}
          >
            <Grid
              container
              sx={{ justifyContent: { xs: "space-around", lg: "normal" } }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: "18px",
                    marginBottom: "12px",
                    paddingX: { xs: "3vh", lg: "1vh" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: "18px",
                    marginBottom: "12px",
                    paddingX: { xs: "3vh", lg: "1vh" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: "18px",
                    paddingX: { xs: "3vh", lg: "1vh" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ justifyContent: { xs: "space-around", lg: "normal" } }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: "18px",
                    marginBottom: "12px",
                    paddingX: { xs: "3vh", lg: "1vh" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: "18px",
                    marginBottom: "12px",
                    paddingX: { xs: "3vh", lg: "1vh" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Times New Roman ",
                    color: "white",
                    fontSize: "18px",
                    paddingX: { xs: "3vh", lg: "1vh" },
                  }}
                >
                  Sit amet, consectetur adipiscing elit.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            width={"100%"}
            display={"flex"}
            justifyContent={{ xs: "center", lg: "flex-start" }}
            marginBottom={"10vh"}
            marginTop={"5vh"}
            paddingLeft={"1vh"}
          >
            <Button
              sx={{
                padding: "2vh 5vh",
                fontFamily: "Times New Roman ",
                color: "darkred",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#CCC",
                },
              }}
            >
              View More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About_section;
